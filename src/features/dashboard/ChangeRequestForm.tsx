'use client';

import { useState } from 'react';
import { createChangeRequest } from '@/actions/changeRequest';

type Status = 'idle' | 'loading' | 'success' | 'error';

export const ChangeRequestForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await createChangeRequest(title, description);
      setTitle('');
      setDescription('');
      setStatus('success');
      setTimeout(setStatus, 4000, 'idle');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-black/10 bg-white p-6"
    >
      <h3 className="font-bold text-ink">Solicitar un cambio</h3>
      <p className="mt-1 text-sm font-light text-ink-muted">
        Describí qué querés actualizar en tu presencia digital.
      </p>

      <div className="mt-4 space-y-3">
        <input
          type="text"
          placeholder="Título del cambio (ej: Actualizar horarios, Cambiar foto)"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          className="
            w-full rounded-xl border border-black/10 px-3 py-2.5 text-sm
            transition-shadow outline-none
            focus:border-verde focus:ring-1 focus:ring-verde
          "
        />
        <textarea
          placeholder="Describí en detalle qué necesitás cambiar o agregar..."
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
          rows={4}
          className="
            w-full resize-none rounded-xl border border-black/10 px-3 py-2.5
            text-sm transition-shadow outline-none
            focus:border-verde focus:ring-1 focus:ring-verde
          "
        />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="
            rounded-xl bg-verde px-5 py-2.5 text-sm font-medium text-white
            transition-opacity
            hover:opacity-90
            disabled:opacity-50
          "
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar solicitud'}
        </button>
        {status === 'success' && (
          <p className="text-sm text-verde-dark">¡Solicitud enviada! La revisamos en menos de 24 hs.</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-500">Error al enviar. Intentá de nuevo.</p>
        )}
      </div>
    </form>
  );
};
