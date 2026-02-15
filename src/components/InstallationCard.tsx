import Link from "next/link";
import { Installation, formatPrice } from "@/lib/data";

interface Props {
  installation: Installation;
}

export default function InstallationCard({ installation }: Props) {
  return (
    <Link
      href={`/installations/${installation.slug}`}
      className="group bg-surface-light hover:bg-surface-lighter rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300 overflow-hidden hover:-translate-y-1"
    >
      {/* Image placeholder */}
      <div className="aspect-video bg-gradient-to-br from-surface-lighter to-surface flex items-center justify-center">
        <div className="text-center">
          <svg className="w-12 h-12 text-gray-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.02-.504.808-1.079l-2.017-5.46A1.5 1.5 0 0017.74 10.5H14.5m-10.125 7.5H3.375m0 0a1.125 1.125 0 01-1.125-1.125v-6.875c0-.621.504-1.125 1.125-1.125h2.711a1.125 1.125 0 01.795.329l2.004 2.004a1.125 1.125 0 00.795.329H14.5" />
          </svg>
          <span className="text-gray-500 text-sm">{installation.carBrand} {installation.carModel}</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{installation.gboSystem}</span>
          <span className="text-xs bg-white/5 text-gray-400 px-2 py-0.5 rounded-full">{installation.gboGeneration} пок.</span>
        </div>

        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors">
          {installation.carBrand} {installation.carModel} {installation.year}
        </h3>

        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{installation.description}</p>

        <div className="flex items-center justify-between">
          <div className="text-primary font-bold text-lg">{formatPrice(installation.price)} ₽</div>
          <div className="text-gray-500 text-sm flex items-center gap-1 group-hover:text-primary transition-colors">
            Подробнее
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
