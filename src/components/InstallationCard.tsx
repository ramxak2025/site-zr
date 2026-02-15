import Link from "next/link";
import { Installation, formatPrice } from "@/lib/data";

interface InstallationCardProps {
  installation: Installation;
}

export default function InstallationCard({ installation }: InstallationCardProps) {
  return (
    <Link
      href={`/installations/${installation.slug}`}
      className="card group block overflow-hidden"
    >
      {installation.images && installation.images.length > 0 && (
        <div className="aspect-[4/3] overflow-hidden bg-surface-alt">
          <img
            src={installation.images[0]}
            alt={`${installation.carBrand} ${installation.carModel}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
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
