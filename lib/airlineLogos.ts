const airlineDomains: Record<string, string> = {
  "Lufthansa": "lufthansa.com",
  "Emirates": "emirates.com",
  "Iberia": "iberia.com",
  "Air France": "airfrance.com",
  "Qatar Airways": "qatarairways.com",
  "British Airways": "britishairways.com",
  "Turkish Airlines": "turkishairlines.com",
  "Singapore Airlines": "singaporeair.com",
  "KLM": "klm.com",
  "American Airlines": "aa.com"
};

export function getAirlineLogoUrl(airline: string): string | null {
  const domain = airlineDomains[airline];
  if (!domain) return null;
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}
