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
import { getPublishedInstallations } from "@/lib/storage";
import { getSiteContent } from "@/lib/content-storage";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [installations, content] = await Promise.all([
    getPublishedInstallations(),
    getSiteContent(),
  ]);
  const latestInstallations = installations.slice(0, 3);

  return (
    <>
      <Hero content={content.hero} />
      <Marquee />
      <Services items={content.services} />
      <Advantages />
      <Calculator />
      <Brands />

      {latestInstallations.length > 0 && (
        <section className="py-24 md:py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 mb-16">
              <div>
                <span className="section-label">Работы</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text mt-3 leading-[0.92] tracking-tight">
                  Последние <span className="text-text-muted">установки</span>
                </h2>
              </div>
              <div className="flex items-end lg:justify-end">
                <Link
                  href="/installations"
                  className="group flex items-center gap-2 text-text-secondary hover:text-primary font-medium transition-colors duration-300"
                >
                  Все работы
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {latestInstallations.map((inst) => (
                <InstallationCard key={inst.id} installation={inst} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Reviews items={content.reviews} platforms={content.reviewPlatforms} />
      <PopularCars />
      <CTA contacts={content.contacts} />
    </>
  );
}
