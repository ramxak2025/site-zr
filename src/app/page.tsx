import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Calculator from "@/components/Calculator";
import Brands from "@/components/Brands";
import PopularCars from "@/components/PopularCars";
import CTA from "@/components/CTA";
import Reviews from "@/components/Reviews";
import InstallationCard from "@/components/InstallationCard";
import BentoShowcase from "@/components/BentoShowcase";
import { getPublishedInstallations } from "@/lib/storage";
import { getSiteContent } from "@/lib/content-storage";
import Link from "next/link";

export const revalidate = 60;

export default async function Home() {
  const [installations, content] = await Promise.all([
    getPublishedInstallations(),
    getSiteContent(),
  ]);
  const latestInstallations = installations.slice(0, 3);

  return (
    <>
      <Hero content={content.hero} bgSettings={content.background} pricing={content.pricing} />
      <Marquee />
      <BentoShowcase pricing={content.pricing} fuelPrices={content.fuelPrices} />
      <Services items={content.services} />
      <Advantages />
      <Calculator fuelPrices={content.fuelPrices} pricing={content.pricing} />
      <Brands />

      {latestInstallations.length > 0 && (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -bottom-40 right-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[100px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="section-label">Работы</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text mt-3 leading-[0.92] tracking-tight">
                  Последние <span className="text-text-muted">установки</span>
                </h2>
              </div>
              <Link
                href="/installations"
                className="group inline-flex items-center gap-2 text-text-secondary hover:text-primary font-medium transition-colors duration-300 shrink-0"
              >
                Все работы
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Bento grid — first card large, rest normal */}
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-5">
              {latestInstallations.map((inst, i) => (
                <div key={inst.id} className={i === 0 ? "md:col-span-6 lg:col-span-6" : "md:col-span-3 lg:col-span-3"}>
                  <InstallationCard installation={inst} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Reviews items={content.reviews} platforms={content.reviewPlatforms} />
      <PopularCars />
      <CTA contacts={content.contacts} bgSettings={content.background} />
    </>
  );
}
