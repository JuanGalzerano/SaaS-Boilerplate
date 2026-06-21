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
        rounded-lg px-4 py-2 text-xs font-semibold transition-colors
        ${
    isActive
      ? `
        bg-red-50 text-red-600
        hover:bg-red-100
      `
      : `
        bg-green-50 text-green-700
        hover:bg-green-100
      `
    }
      `}
    >
      {isActive ? 'Desactivar sitio' : 'Activar sitio'}
    </button>
  );
};
