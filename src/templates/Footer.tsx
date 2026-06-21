import { Link } from '@/libs/I18nNavigation';
import { AppConfig } from '@/utils/AppConfig';
import { Logo } from './Logo';

export const Footer = () => (
  <footer className="border-t border-black/10 bg-cream py-8">
    <div className="mx-auto max-w-6xl px-4">
      <div className="flex flex-wrap items-start justify-between gap-8">
        <div>
          <Logo />
          <p className="mt-3 text-sm font-light text-ink-muted">Buenos Aires, Argentina</p>
          <div className="mt-3 flex flex-col gap-1">
            <a
              href={`mailto:${AppConfig.email.support}`}
              className="
                text-sm text-ink-muted transition-colors
                hover:text-verde
              "
            >
              {AppConfig.email.support}
            </a>
            <a
              href={AppConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-sm text-ink-muted transition-colors
                hover:text-verde
              "
            >
              WhatsApp
            </a>
            <a
              href={AppConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-sm text-ink-muted transition-colors
                hover:text-verde
              "
            >
              @jg.asistenciadigital
            </a>
          </div>
        </div>

        <div className="flex gap-12 text-sm">
          <div>
            <p className="mb-3 font-semibold text-ink">Servicios</p>
            <ul className="space-y-2 font-light text-ink-muted">
              <li>
                <a
                  href="#servicios"
                  className="
                    transition-colors
                    hover:text-verde
                  "
                >
                  Página web
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="
                    transition-colors
                    hover:text-verde
                  "
                >
                  WhatsApp Business
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="
                    transition-colors
                    hover:text-verde
                  "
                >
                  Google Maps
                </a>
              </li>
              <li>
                <a
                  href="#planes"
                  className="
                    transition-colors
                    hover:text-verde
                  "
                >
                  Ver planes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold text-ink">Cuenta</p>
            <ul className="space-y-2 font-light text-ink-muted">
              <li>
                <Link
                  href="/sign-in"
                  className="
                    transition-colors
                    hover:text-verde
                  "
                >
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-up"
                  className="
                    transition-colors
                    hover:text-verde
                  "
                >
                  Registrarse
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-black/10 pt-6 text-xs text-ink-hint">
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        {AppConfig.name}
        {' '}
        · Ciudad Autónoma de Buenos Aires, Argentina.
      </div>
    </div>
  </footer>
);
