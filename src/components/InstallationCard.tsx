import Link from "next/link";
import { Installation, formatPrice } from "@/lib/data";

export default function InstallationCard({ installation }: { installation: Installation }) {
  return (
    <Link
      href={`/installations/${installation.slug}`}
      className="group glass hover:glass-strong rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image placeholder */}
      <div className="aspect-video bg-gradient-to-br from-surface-lighter to-surface flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="text-center relative z-10">
          <svg className="w-10 h-10 text-white/10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.02-.504.808-1.079l-2.017-5.46A1.5 1.5 0 0017.74 10.5H14.5m-10.125 7.5H3.375m0 0a1.125 1.125 0 01-1.125-1.125v-6.875c0-.621.504-1.125 1.125-1.125h2.711a1.125 1.125 0 01.795.329l2.004 2.004a1.125 1.125 0 00.795.329H14.5" />
          </svg>
          <span className="text-white/30 text-sm">{installation.carBrand} {installation.carModel}</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs glass-red rounded-lg px-2 py-0.5 text-primary">{installation.gboSystem}</span>
          <span className="text-xs glass rounded-lg px-2 py-0.5 text-white/40">{installation.gboGeneration} пок.</span>
        </div>

        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
          {installation.carBrand} {installation.carModel} {installation.year}
        </h3>

        <p className="text-white/35 text-sm mb-3 line-clamp-2">{installation.description}</p>

        <div className="flex items-center justify-between">
          <div className="text-primary font-bold text-lg">{formatPrice(installation.price)} ₽</div>
          <div className="text-white/30 text-sm flex items-center gap-1 group-hover:text-primary transition-colors duration-300">
            Подробнее
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
