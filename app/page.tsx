import Header from "@/components/Header";
import DealCard from "@/components/DealCard";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { getAllDeals } from "@/lib/mockDeals";

/**
 * Home Page - CholloFly
 *
 * Página principal que muestra el feed de chollos de vuelos del día.
 * Incluye header, tarjetas de deals, sección explicativa y footer.
 *
 * TODO: Integrar sistema real de afiliación y tracking
 * TODO: Conectar con API real de precios
 *
 * @page
 */
export default function Home() {
  const deals = getAllDeals();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Header />

      <main className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 pb-10 sm:pb-12">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">
            Chollos disponibles ahora
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {deals.length} ofertas increíbles encontradas hoy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </main>

      <HowItWorks />

      <Footer />
    </div>
  );
}
