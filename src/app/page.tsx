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
import Link from "next/link";

export default async function Home() {
  const installations = await getPublishedInstallations();
  const latestInstallations = installations.slice(0, 3);

  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Advantages />
      <Calculator />
      <Brands />

      {/* Latest installations section */}
      {latestInstallations.length > 0 && (
        <section className="py-24 md:py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 mb-16">
              <div>
                <span className="section-num">05 / РАБОТЫ</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-3 leading-[0.95]">
                  Последние <span className="text-white/20">установки</span>
                </h2>
              </div>
              <div className="flex items-end lg:justify-end">
                <Link
                  href="/installations"
                  className="group flex items-center gap-2 text-white/30 hover:text-primary font-medium transition-colors duration-300"
                >
                  Все работы
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {latestInstallations.map((inst) => (
                <InstallationCard key={inst.id} installation={inst} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Reviews />
      <PopularCars />
      <CTA />
    </>
  );
}
