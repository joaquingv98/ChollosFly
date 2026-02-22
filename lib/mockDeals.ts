/**
 * Mock Flight Deals Data
 *
 * TODO: Integrar sistema real de afiliación y tracking
 * TODO: Conectar con API real de precios
 * TODO: Conectar disponibilidad real de plazas
 * FIXME: Revisar legalidad del claim "precio habitual estimado"
 *
 * Este archivo contiene datos de ejemplo para mostrar chollos de vuelos.
 * Los precios y descuentos son simulados con fines demostrativos.
 */

export interface Deal {
  id: string;
  airline: string;
  originCity: string;
  originCode: string;
  destinationCity: string;
  destinationCode: string;
  outboundDateLabel: string;
  returnDateLabel: string;
  stopsLabel: string;
  durationLabel: string;
  price: number;
  currency: string;
  marketPriceEstimate: number;
  discountPercent: number;
  dealTag: string;
  seatsLeft: number;
  dealUrl: string;
  airlineLogo: string;
}

export const mockDeals: Deal[] = [
  {
    id: "cf-001",
    airline: "Lufthansa",
    originCity: "Madrid",
    originCode: "MAD",
    destinationCity: "Tokyo",
    destinationCode: "HND",
    outboundDateLabel: "17 sep",
    returnDateLabel: "24 sep",
    stopsLabel: "1 escala",
    durationLabel: "14h 05m",
    price: 389,
    currency: "€",
    marketPriceEstimate: 575,
    discountPercent: 32,
    dealTag: "Chollo del día",
    seatsLeft: 6,
    dealUrl: "https://example.com/buy",
    airlineLogo: "🛫"
  },
  {
    id: "cf-002",
    airline: "Emirates",
    originCity: "Barcelona",
    originCode: "BCN",
    destinationCity: "Dubai",
    destinationCode: "DXB",
    outboundDateLabel: "5 oct",
    returnDateLabel: "12 oct",
    stopsLabel: "Directo",
    durationLabel: "7h 30m",
    price: 295,
    currency: "€",
    marketPriceEstimate: 480,
    discountPercent: 39,
    dealTag: "Error fare",
    seatsLeft: 3,
    dealUrl: "https://example.com/buy",
    airlineLogo: "✈️"
  },
  {
    id: "cf-003",
    airline: "Iberia",
    originCity: "Madrid",
    originCode: "MAD",
    destinationCity: "New York",
    destinationCode: "JFK",
    outboundDateLabel: "12 nov",
    returnDateLabel: "19 nov",
    stopsLabel: "Directo",
    durationLabel: "8h 20m",
    price: 325,
    currency: "€",
    marketPriceEstimate: 650,
    discountPercent: 50,
    dealTag: "Flash",
    seatsLeft: 5,
    dealUrl: "https://example.com/buy",
    airlineLogo: "🛩️"
  },
  {
    id: "cf-004",
    airline: "Air France",
    originCity: "Valencia",
    originCode: "VLC",
    destinationCity: "París",
    destinationCode: "CDG",
    outboundDateLabel: "25 sep",
    returnDateLabel: "29 sep",
    stopsLabel: "Directo",
    durationLabel: "2h 10m",
    price: 89,
    currency: "€",
    marketPriceEstimate: 145,
    discountPercent: 39,
    dealTag: "Chollo del día",
    seatsLeft: 14,
    dealUrl: "https://example.com/buy",
    airlineLogo: "🛫"
  },
  {
    id: "cf-005",
    airline: "Qatar Airways",
    originCity: "Madrid",
    originCode: "MAD",
    destinationCity: "Bangkok",
    destinationCode: "BKK",
    outboundDateLabel: "18 oct",
    returnDateLabel: "27 oct",
    stopsLabel: "1 escala",
    durationLabel: "13h 45m",
    price: 445,
    currency: "€",
    marketPriceEstimate: 720,
    discountPercent: 38,
    dealTag: "Flash",
    seatsLeft: 4,
    dealUrl: "https://example.com/buy",
    airlineLogo: "✈️"
  },
  {
    id: "cf-006",
    airline: "British Airways",
    originCity: "Barcelona",
    originCode: "BCN",
    destinationCity: "Londres",
    destinationCode: "LHR",
    outboundDateLabel: "30 sep",
    returnDateLabel: "4 oct",
    stopsLabel: "Directo",
    durationLabel: "2h 25m",
    price: 75,
    currency: "€",
    marketPriceEstimate: 120,
    discountPercent: 38,
    dealTag: "Chollo",
    seatsLeft: 11,
    dealUrl: "https://example.com/buy",
    airlineLogo: "🛩️"
  },
  {
    id: "cf-007",
    airline: "Turkish Airlines",
    originCity: "Madrid",
    originCode: "MAD",
    destinationCity: "Estambul",
    destinationCode: "IST",
    outboundDateLabel: "22 oct",
    returnDateLabel: "28 oct",
    stopsLabel: "Directo",
    durationLabel: "4h 30m",
    price: 185,
    currency: "€",
    marketPriceEstimate: 310,
    discountPercent: 40,
    dealTag: "Error fare",
    seatsLeft: 2,
    dealUrl: "https://example.com/buy",
    airlineLogo: "🛫"
  },
  {
    id: "cf-008",
    airline: "Singapore Airlines",
    originCity: "Barcelona",
    originCode: "BCN",
    destinationCity: "Singapur",
    destinationCode: "SIN",
    outboundDateLabel: "8 nov",
    returnDateLabel: "19 nov",
    stopsLabel: "1 escala",
    durationLabel: "15h 20m",
    price: 520,
    currency: "€",
    marketPriceEstimate: 850,
    discountPercent: 39,
    dealTag: "Flash",
    seatsLeft: 7,
    dealUrl: "https://example.com/buy",
    airlineLogo: "✈️"
  },
  {
    id: "cf-009",
    airline: "KLM",
    originCity: "Madrid",
    originCode: "MAD",
    destinationCity: "Amsterdam",
    destinationCode: "AMS",
    outboundDateLabel: "3 oct",
    returnDateLabel: "7 oct",
    stopsLabel: "Directo",
    durationLabel: "2h 50m",
    price: 95,
    currency: "€",
    marketPriceEstimate: 155,
    discountPercent: 39,
    dealTag: "Chollo",
    seatsLeft: 9,
    dealUrl: "https://example.com/buy",
    airlineLogo: "🛩️"
  },
  {
    id: "cf-010",
    airline: "American Airlines",
    originCity: "Barcelona",
    originCode: "BCN",
    destinationCity: "Los Angeles",
    destinationCode: "LAX",
    outboundDateLabel: "15 nov",
    returnDateLabel: "24 nov",
    stopsLabel: "1 escala",
    durationLabel: "14h 10m",
    price: 380,
    currency: "€",
    marketPriceEstimate: 620,
    discountPercent: 39,
    dealTag: "Chollo del día",
    seatsLeft: 5,
    dealUrl: "https://example.com/buy",
    airlineLogo: "🛫"
  }
];

/**
 * Función helper para obtener un deal por ID
 * @param {string} id - El ID del deal a buscar
 * @returns {Deal|undefined} El deal encontrado o undefined
 */
export function getDealById(id: string): Deal | undefined {
  return mockDeals.find(deal => deal.id === id);
}

/**
 * Función helper para obtener todos los deals
 * @returns {Deal[]} Array con todos los deals
 */
export function getAllDeals(): Deal[] {
  return mockDeals;
}

/**
 * Construye una etiqueta de ventana de viaje clara para el usuario.
 */
export function formatDealDateWindow(
  deal: Pick<Deal, "outboundDateLabel" | "returnDateLabel">
): string {
  return `Vas ${deal.outboundDateLabel} · Vuelves ${deal.returnDateLabel}`;
}
