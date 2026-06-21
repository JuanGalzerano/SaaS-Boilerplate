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
      className="rounded-xl border border-slate-200 bg-white p-6"
    >
      <h3 className="font-semibold text-slate-900">Solicitar un cambio</h3>
      <p className="mt-1 text-sm text-slate-500">
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
            w-full rounded-lg border border-slate-200 px-3 py-2 text-sm
            transition-shadow outline-none
            focus:border-blue-500 focus:ring-1 focus:ring-blue-500
          "
        />
        <textarea
          placeholder="Describí en detalle qué necesitás cambiar o agregar..."
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
          rows={4}
          className="
            w-full resize-none rounded-lg border border-slate-200 px-3 py-2
            text-sm transition-shadow outline-none
            focus:border-blue-500 focus:ring-1 focus:ring-blue-500
          "
        />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="
            rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white
            transition-colors
            hover:bg-blue-500
            disabled:opacity-50
          "
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar solicitud'}
        </button>
        {status === 'success' && (
          <p className="text-sm text-green-600">¡Solicitud enviada! La revisamos en menos de 24 hs.</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-500">Error al enviar. Intentá de nuevo.</p>
        )}
      </div>
    </form>
  );
};
