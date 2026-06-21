'use client';

import { toggleSiteStatus } from '@/actions/siteStatus';

type Props = {
  siteId: number;
  isActive: boolean;
};

export const ToggleSiteButton = ({ siteId, isActive }: Props) => {
  const handleClick = async () => {
    await toggleSiteStatus(siteId, isActive);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        rounded-xl px-4 py-2 text-xs font-medium transition-opacity
        hover:opacity-80
        ${
    isActive
      ? 'bg-red-50 text-red-600'
      : 'bg-verde-light text-verde-dark'
    }
      `}
    >
      {isActive ? 'Desactivar sitio' : 'Activar sitio'}
    </button>
  );
};
