import { TrendingDown, BarChart3, MousePointerClick } from "lucide-react";

/**
 * HowItWorks Component
 *
 * Sección que explica el funcionamiento del servicio en 3 pasos simples.
 * Presenta de forma visual y minimalista cómo CholloFly ayuda a encontrar chollos.
 *
 * @component
 * @example
 * return (
 *   <HowItWorks />
 * )
 */
export default function HowItWorks() {
  const steps = [
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Detectamos bajadas",
      description: "Monitorizamos miles de vuelos diariamente para identificar caídas significativas de precio."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Comparamos contra precio habitual",
      description: "Analizamos datos históricos para calcular cuánto estás ahorrando realmente."
    },
    {
      icon: <MousePointerClick className="w-8 h-8" />,
      title: "Compras en un clic",
      description: "Sin búsquedas complejas ni filtros. Solo chollos verificados listos para comprar."
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-slate-900/60 to-transparent py-12 sm:py-16 mt-10 sm:mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 mb-3">
            Cómo funciona
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Simplificamos la búsqueda de vuelos baratos para que puedas viajar más por menos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              number={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * StepCard Component
 *
 * Tarjeta individual que muestra cada paso del proceso.
 *
 * @param {object} props - Props del componente
 * @param {JSX.Element} props.icon - Icono del paso
 * @param {string} props.title - Título del paso
 * @param {string} props.description - Descripción del paso
 * @param {number} props.number - Número del paso
 */
function StepCard({ icon, title, description, number }) {
  return (
    <div className="relative bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 hover:shadow-lg hover:shadow-slate-950/50 transition-shadow duration-200">
      <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full flex items-center justify-center shadow-md">
        <span className="text-white font-bold text-lg">{number}</span>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center text-blue-300 mb-4">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-slate-100 mb-3">
          {title}
        </h3>

        <p className="text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
