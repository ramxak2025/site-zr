import Link from "next/link";
import Image from "next/image";
import { Installation, formatPrice } from "@/lib/data";

interface InstallationCardProps {
  installation: Installation;
}

export default function InstallationCard({ installation }: InstallationCardProps) {
  const hasImage = installation.images && installation.images.length > 0;

  return (
    <Link
      href={`/installations/${installation.slug}`}
      className="card group block overflow-hidden"
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface-alt relative">
        {hasImage ? (
          <Image
            src={installation.images[0]}
            alt={`${installation.carBrand} ${installation.carModel}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center">
              <svg className="w-10 h-10 text-gray-300 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
              <span className="text-gray-400 text-xs">{installation.carBrand} {installation.carModel}</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-text font-bold text-lg group-hover:text-primary transition-colors duration-300">
            {installation.carBrand} {installation.carModel}
          </h3>
          {installation.year && (
            <span className="text-text-muted text-xs">{installation.year}</span>
          )}
        </div>
        <div className="flex items-center gap-3 mb-3">
          <span className="badge badge-red text-xs">
            {installation.gboSystem}
          </span>
          {installation.cylinderVolume && (
            <span className="text-text-muted text-xs">{installation.cylinderVolume}</span>
          )}
        </div>
        {installation.price && (
          <div className="text-text font-bold text-lg text-display">{formatPrice(installation.price)} ₽</div>
        )}
      </div>
    </Link>
  );
}
