import Link from "next/link";
import { AlertCircle } from "lucide-react";

/**
 * Footer Component
 *
 * Pie de página con links legales y disclaimer importante.
 * Incluye advertencia clara sobre la volatilidad de precios y estimaciones.
 *
 * FIXME: Revisar legalidad del claim "precio habitual estimado"
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="bg-amber-900/20 border border-amber-800/60 rounded-xl p-4 sm:p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-100 mb-2">
                Información importante
              </h3>
              <p className="text-sm text-amber-200 leading-relaxed">
                Los precios pueden cambiar rápidamente. El porcentaje de descuento es una
                estimación basada en datos históricos. Las indicaciones sobre disponibilidad
                de plazas son orientativas. Recomendamos verificar siempre los detalles
                finales en la página de la aerolínea antes de completar tu compra.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-6 mb-8">
          <div className="text-center md:text-left">
            <div className="font-bold text-xl text-slate-100 mb-1">CholloFly</div>
            <p className="text-sm text-slate-400">
              Encuentra los mejores chollos de vuelos
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <FooterLink href="/legal" text="Aviso legal" />
            <FooterLink href="/privacy" text="Privacidad" />
            <FooterLink href="/contact" text="Contacto" />
          </nav>
        </div>

        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-500">
            {currentYear} CholloFly. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

/**
 * FooterLink Component
 *
 * Link individual del footer.
 *
 * @param {object} props - Props del componente
 * @param {string} props.href - URL del link
 * @param {string} props.text - Texto del link
 */
function FooterLink({ href, text }) {
  return (
    <Link
      href={href}
      className="text-sm text-slate-400 hover:text-slate-100 transition-colors duration-200"
    >
      {text}
    </Link>
  );
}
