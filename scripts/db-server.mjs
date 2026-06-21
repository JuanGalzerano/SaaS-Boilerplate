/**
 * Starts pglite-server then runs db:migrate once it's ready.
 * Replaces the broken --run flag on Windows.
 */
import { spawn } from 'node:child_process';
import { createConnection } from 'node:net';

function waitForPort(port, timeout = 30000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const attempt = () => {
      const socket = createConnection({ port, host: '127.0.0.1' });
      socket.on('connect', () => {
        socket.destroy();
        resolve();
      });
      socket.on('error', () => {
        socket.destroy();
        if (Date.now() - start > timeout) {
          return reject(new Error('Timeout'));
        }
        setTimeout(attempt, 500);
      });
    };
    attempt();
  });
}

const args = process.argv.slice(2);
const serverArgs = ['-m', '100', ...args];

const server = spawn('npx', ['pglite-server', ...serverArgs], {
  stdio: 'inherit',
  shell: true,
});

server.on('error', (err) => {
  console.error('pglite-server error:', err);
  process.exit(1);
});

console.log('Waiting for pglite-server on port 5432...');
await waitForPort(5432);
console.log('DB ready. Running migrations...');

const migrate = spawn('npm', ['run', 'db:migrate'], { stdio: 'inherit', shell: true });
migrate.on('close', (code) => {
  if (code !== 0) {
    console.error(`Migration exited with code ${code}`);
  } else {
    console.log('Migrations applied.');
  }
});
