import { Plane } from "lucide-react";

/**
 * Header Component
 *
 * Componente principal del encabezado de CholloFly.
 * Incluye el logo, título principal, subtítulo y chips informativos.
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */
export default function Header() {
  return (
    <header className="w-full bg-gradient-to-b from-slate-900 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-8 sm:pb-12">
        <div className="flex items-center gap-2 mb-5 sm:mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full flex items-center justify-center shadow-sm">
            <Plane className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-100">CholloFly</h1>
        </div>

        <div className="mb-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-100 mb-3 leading-tight">
            Chollos de vuelos hoy
          </h2>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl">
            Detectamos vuelos por debajo del precio habitual. Solo para los que se calientan.
          </p>
        </div>

        <div className="flex gap-2 mt-5 sm:mt-6 overflow-x-auto pb-1">
          <InfoChip icon="🔄" text="Actualizado hoy" />
          <InfoChip icon="📊" text="Precios dinámicos" />
          <InfoChip icon="⚡" text="Sin búsquedas manuales" />
        </div>
      </div>
    </header>
  );
}

/**
 * InfoChip Component
 *
 * Chip informativo no interactivo que muestra información
 * sobre las características del servicio.
 *
 * @param {object} props - Props del componente
 * @param {string} props.icon - Emoji o icono a mostrar
 * @param {string} props.text - Texto descriptivo
 */
function InfoChip({ icon, text }) {
  return (
    <div className="inline-flex shrink-0 items-center gap-2 px-3 sm:px-4 py-2 bg-slate-900/70 rounded-full border border-slate-700 shadow-sm">
      <span className="text-sm">{icon}</span>
      <span className="text-sm font-medium text-slate-200">{text}</span>
    </div>
  );
}
