import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Calculator from "@/components/Calculator";
import Brands from "@/components/Brands";
import PopularCars from "@/components/PopularCars";
import CTA from "@/components/CTA";
import InstallationCard from "@/components/InstallationCard";
import { getPublishedInstallations } from "@/lib/storage";
import Link from "next/link";

export default async function Home() {
  const installations = await getPublishedInstallations();
  const latestInstallations = installations.slice(0, 3);

  return (
    <>
      <Hero />
      <Services />
      <Advantages />
      <Calculator />
      <Brands />

      {/* Latest installations section */}
      {latestInstallations.length > 0 && (
        <section className="py-20 md:py-28 bg-surface-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Последние установки</h2>
                <p className="text-gray-400 text-lg">Примеры наших работ по установке ГБО</p>
              </div>
              <Link
                href="/installations"
                className="hidden sm:flex items-center gap-1 text-primary hover:text-primary-light font-medium transition-colors"
              >
                Все работы
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestInstallations.map((inst) => (
                <InstallationCard key={inst.id} installation={inst} />
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/installations"
                className="inline-flex items-center gap-1 text-primary font-medium"
              >
                Все работы &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      <PopularCars />
      <CTA />
    </>
  );
}
