import { buttonVariants } from '@/components/ui/buttonVariants';
import { Link } from '@/libs/I18nNavigation';
import { Logo } from './Logo';

export const Navbar = () => (
  <nav className="
    sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-sm
  "
  >
    <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
      <Logo />

      <div className="
        hidden items-center gap-6 text-sm font-medium text-slate-600
        md:flex
      "
      >
        <a
          href="#servicios"
          className="
            transition-colors
            hover:text-slate-900
          "
        >
          Servicios
        </a>
        <a
          href="#porque"
          className="
            transition-colors
            hover:text-slate-900
          "
        >
          ¿Por qué?
        </a>
        <a
          href="#planes"
          className="
            transition-colors
            hover:text-slate-900
          "
        >
          Planes
        </a>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/sign-in"
          className="
            text-sm font-medium text-slate-600
            hover:text-slate-900
          "
        >
          Iniciar sesión
        </Link>
        <a href="#planes" className={buttonVariants({ size: 'sm' })}>
          Ver planes
        </a>
      </div>
    </div>
  </nav>
);
