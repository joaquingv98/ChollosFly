import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, ExternalLink, AlertTriangle } from "lucide-react";
import { getDealById, getAllDeals, formatDealDateWindow } from "@/lib/mockDeals";
import { getAirlineLogoUrl } from "@/lib/airlineLogos";
import Footer from "@/components/Footer";
import AirlineLogo from "@/components/AirlineLogo";

/**
 * Generar rutas estáticas para exportación
 */
export async function generateStaticParams() {
  const deals = getAllDeals();
  return deals.map((deal) => ({
    id: deal.id,
  }));
}

/**
 * Deal Detail Page
 *
 * Página de detalle de un chollo específico.
 * Muestra información ampliada del vuelo con opción de compra.
 *
 * TODO: Integrar sistema real de afiliación y tracking
 * TODO: Conectar disponibilidad real de plazas
 * FIXME: Revisar legalidad del claim "precio habitual estimado"
 *
 * @page
 * @param {object} params - Parámetros de la ruta
 * @param {string} params.id - ID del deal
 */
export default function DealDetailPage({ params }: { params: { id: string } }) {
  const dealData = getDealById(params.id);

  if (!dealData) {
    notFound();
  }

  const deal = dealData;

  const {
    airline,
    airlineLogo,
    originCity,
    originCode,
    destinationCity,
    destinationCode,
    outboundDateLabel,
    returnDateLabel,
    stopsLabel,
    durationLabel,
    price,
    currency,
    marketPriceEstimate,
    discountPercent,
    dealTag,
    seatsLeft,
    dealUrl
  } = deal;

  const savings = marketPriceEstimate - price;
  const airlineLogoUrl = getAirlineLogoUrl(airline);
  const seatsUrgency = getSeatsUrgency(seatsLeft);
  const dateWindowLabel = formatDealDateWindow({ outboundDateLabel, returnDateLabel });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <header className="w-full bg-slate-950/95 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-100 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Volver a chollos</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 overflow-hidden">
          {dealTag && (
            <div className="bg-gradient-to-r from-rose-500 to-orange-500 text-white px-4 sm:px-6 py-3 text-center font-semibold text-sm sm:text-base">
              {dealTag}
            </div>
          )}

          <div className="p-4 sm:p-8">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-slate-600 rounded-xl flex items-center justify-center overflow-hidden">
                <AirlineLogo
                  airline={airline}
                  logoUrl={airlineLogoUrl}
                  emojiFallback={airlineLogo}
                  sizeClassName="w-10 h-10 sm:w-12 sm:h-12"
                />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-100">{airline}</h1>
                <p className="text-sm sm:text-base text-slate-400 mt-1">Vuelo de {originCity} a {destinationCity}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-4 sm:p-8 mb-6 sm:mb-8">
              <div className="flex items-center justify-between mb-6 sm:mb-8 gap-2">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-slate-100 mb-2">{originCode}</div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm sm:text-base">{originCity}</span>
                  </div>
                </div>

                <div className="flex-1 flex justify-center items-center px-2 sm:px-8">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-full max-w-[90px] sm:max-w-[150px] h-px bg-slate-600 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 px-3">
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300" />
                      </div>
                    </div>
                    <span className="text-sm text-slate-400 font-medium">{stopsLabel}</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-slate-100 mb-2">{destinationCode}</div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm sm:text-base">{destinationCity}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <InfoItem
                  icon={<Calendar className="w-5 h-5" />}
                  label="Ventana del chollo"
                  value={dateWindowLabel}
                />
                <InfoItem
                  icon={<Clock className="w-5 h-5" />}
                  label="Duración"
                  value={durationLabel}
                />
              </div>
            </div>

            <div className="bg-slate-950/70 rounded-2xl p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-800">
              <h2 className="text-xl font-bold text-slate-100 mb-6">Detalles del precio</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                  <span className="text-slate-400">Precio habitual estimado</span>
                  <span className="text-lg text-slate-500 line-through">
                    {marketPriceEstimate}{currency}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                  <span className="text-slate-400">Descuento aplicado</span>
                  <span className="text-lg font-semibold text-green-600">
                    -{discountPercent}%
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                  <span className="text-slate-400">Ahorras</span>
                  <span className="text-lg font-semibold text-green-600">
                    {savings}{currency}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-xl font-bold text-slate-100">Precio final</span>
                  <span className="text-3xl sm:text-4xl font-bold text-slate-100">
                    {price}{currency}
                  </span>
                </div>
              </div>

              {seatsUrgency && (
                <div className={`mt-6 p-4 rounded-xl border ${seatsUrgency.className}`}>
                  <p className="text-base sm:text-lg font-semibold text-center flex items-center justify-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    {seatsUrgency.message}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <a
                href={dealUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <span>Comprar ahora</span>
                <ExternalLink className="w-5 h-5" />
              </a>

              <p className="text-sm text-slate-500 text-center">
                Serás redirigido a la página de la aerolínea para completar tu compra
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 bg-blue-950/30 border border-blue-900/60 rounded-xl p-4 sm:p-6">
          <h3 className="font-semibold text-blue-200 mb-2">
            Información adicional
          </h3>
          <ul className="space-y-2 text-sm text-blue-300">
            <li>• Los precios mostrados son por persona en clase económica</li>
            <li>• El precio final puede variar según disponibilidad y fechas exactas</li>
            <li>• Recomendamos reservar lo antes posible para asegurar el precio</li>
            <li>• Consulta las condiciones de equipaje y cambios en la aerolínea</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/**
 * InfoItem Component
 *
 * Muestra un elemento de información con icono, etiqueta y valor.
 *
 * @param {object} props - Props del componente
 * @param {JSX.Element} props.icon - Icono a mostrar
 * @param {string} props.label - Etiqueta del campo
 * @param {string} props.value - Valor del campo
 */
function InfoItem({ icon, label, value }: { icon: JSX.Element; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 bg-slate-900 border border-slate-700 rounded-xl p-4">
      <div className="text-slate-400">{icon}</div>
      <div>
        <div className="text-xs text-slate-500 mb-1">{label}</div>
        <div className="font-semibold text-slate-100">{value}</div>
      </div>
    </div>
  );
}

function getSeatsUrgency(seatsLeft: number | undefined) {
  if (typeof seatsLeft !== "number") {
    return null;
  }

  if (seatsLeft <= 3) {
    return {
      message: `Solo ${seatsLeft} plazas disponibles. Reserva ahora.`,
      className: "text-rose-100 bg-rose-900/35 border-rose-500/60 shadow-sm shadow-rose-950/40"
    };
  }

  if (seatsLeft <= 7) {
    return {
      message: `Quedan ${seatsLeft} plazas. Mejor reservar cuanto antes.`,
      className: "text-amber-100 bg-amber-900/25 border-amber-600/60"
    };
  }

  return {
    message: `${seatsLeft} plazas disponibles en este momento.`,
    className: "text-emerald-100 bg-emerald-900/25 border-emerald-700/60"
  };
}
