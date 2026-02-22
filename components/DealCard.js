import Link from "next/link";
import { ArrowRight, Clock, Calendar, AlertTriangle } from "lucide-react";
import { getAirlineLogoUrl } from "@/lib/airlineLogos";
import { formatDealDateWindow } from "@/lib/mockDeals";
import AirlineLogo from "@/components/AirlineLogo";

/**
 * DealCard Component
 *
 * Tarjeta que muestra información detallada de un chollo de vuelo.
 * Incluye información de aerolínea, ruta, precio, descuento y CTAs.
 *
 * TODO: Integrar sistema real de afiliación y tracking
 * TODO: Conectar disponibilidad real de plazas
 *
 * @component
 * @param {object} props - Props del componente
 * @param {object} props.deal - Objeto con la información del vuelo
 * @param {string} props.deal.id - ID único del deal
 * @param {string} props.deal.airline - Nombre de la aerolínea
 * @param {string} props.deal.airlineLogo - Emoji del logo de la aerolínea
 * @param {string} props.deal.originCity - Ciudad origen
 * @param {string} props.deal.originCode - Código aeropuerto origen
 * @param {string} props.deal.destinationCity - Ciudad destino
 * @param {string} props.deal.destinationCode - Código aeropuerto destino
 * @param {string} props.deal.outboundDateLabel - Fecha de ida
 * @param {string} props.deal.returnDateLabel - Fecha de vuelta
 * @param {string} props.deal.stopsLabel - Número de escalas
 * @param {string} props.deal.durationLabel - Duración del vuelo
 * @param {number} props.deal.price - Precio actual
 * @param {string} props.deal.currency - Símbolo de moneda
 * @param {number} props.deal.marketPriceEstimate - Precio habitual estimado
 * @param {number} props.deal.discountPercent - Porcentaje de descuento
 * @param {string} props.deal.dealTag - Etiqueta del chollo
 * @param {number} props.deal.seatsLeft - Número de plazas restantes
 * @param {string} props.deal.dealUrl - URL de compra
 */
export default function DealCard({ deal }) {
  const {
    id,
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
  const airlineLogoUrl = getAirlineLogoUrl(airline);
  const seatsUrgency = getSeatsUrgency(seatsLeft);
  const dateWindowLabel = formatDealDateWindow({ outboundDateLabel, returnDateLabel });

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-sm hover:shadow-lg hover:shadow-slate-950/50 transition-shadow duration-200 overflow-hidden">
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl border border-slate-600 flex items-center justify-center overflow-hidden">
              <AirlineLogo
                airline={airline}
                logoUrl={airlineLogoUrl}
                emojiFallback={airlineLogo}
                sizeClassName="w-9 h-9"
              />
            </div>
            <div>
              <h3 className="font-semibold text-slate-100">{airline}</h3>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="text-xs text-slate-400">{stopsLabel}</span>
                <span className="text-xs text-slate-600">•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span className="text-xs text-slate-400">{durationLabel}</span>
                </div>
              </div>
            </div>
          </div>

          {dealTag && (
            <span className="px-2.5 py-1 bg-gradient-to-r from-rose-500 to-orange-500 text-white text-xs font-semibold rounded-full text-center">
              {dealTag}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mb-4 py-4 border-y border-slate-800 gap-2">
          <div className="text-left">
            <div className="text-xl sm:text-2xl font-bold text-slate-100">{originCode}</div>
            <div className="text-sm text-slate-400">{originCity}</div>
          </div>

          <div className="flex-1 flex justify-center items-center px-4">
            <div className="w-full max-w-[100px] h-px bg-slate-700 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-2">
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xl sm:text-2xl font-bold text-slate-100">{destinationCode}</div>
            <div className="text-sm text-slate-400">{destinationCity}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-slate-500" />
          <span className="text-sm text-slate-400">{dateWindowLabel}</span>
        </div>

        <div className="flex items-end justify-between gap-3 mb-4">
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl sm:text-3xl font-bold text-slate-100">
                {price}{currency}
              </span>
              <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-md">
                -{discountPercent}%
              </span>
            </div>
            <div className="text-sm text-slate-500">
              Precio habitual estimado:{" "}
              <span className="line-through">{marketPriceEstimate}{currency}</span>
            </div>
          </div>

          {seatsUrgency && (
            <div className={`inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-xl border text-center ${seatsUrgency.className}`}>
              <AlertTriangle className="w-4 h-4" />
              {seatsUrgency.message}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={dealUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 text-center shadow-sm hover:shadow-md"
          >
            Comprar
          </a>
          <Link
            href={`/deal/${id}`}
            className="flex items-center justify-center px-6 py-3 border-2 border-slate-700 hover:border-slate-500 text-slate-200 font-medium rounded-xl transition-all duration-200"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}

function getSeatsUrgency(seatsLeft) {
  if (typeof seatsLeft !== "number") {
    return null;
  }

  if (seatsLeft <= 3) {
    return {
      message: `Solo ${seatsLeft} plazas`,
      className: "text-rose-100 bg-rose-900/60 border-rose-500/60 shadow-sm shadow-rose-950/40"
    };
  }

  if (seatsLeft <= 7) {
    return {
      message: `Quedan ${seatsLeft} plazas`,
      className: "text-amber-100 bg-amber-900/40 border-amber-600/60"
    };
  }

  return {
    message: `${seatsLeft} plazas disponibles`,
    className: "text-emerald-100 bg-emerald-900/35 border-emerald-700/60"
  };
}
