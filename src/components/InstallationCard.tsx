import Link from "next/link";
import { Installation, formatPrice } from "@/lib/data";

interface InstallationCardProps {
  installation: Installation;
}

export default function InstallationCard({ installation }: InstallationCardProps) {
  return (
    <Link
      href={`/installations/${installation.slug}`}
      className="card-light group block overflow-hidden"
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
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-text font-bold group-hover:text-primary transition-colors duration-300">
            {installation.carBrand} {installation.carModel}
          </h3>
          {installation.year && (
            <span className="text-text-muted text-xs">{installation.year}</span>
          )}
        </div>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-md font-medium">
            {installation.gboSystem}
          </span>
          {installation.cylinderVolume && (
            <span className="text-text-muted text-xs">{installation.cylinderVolume}</span>
          )}
        </div>
        {installation.price && (
          <div className="text-text font-bold text-display">{formatPrice(installation.price)} ₽</div>
        )}
      </div>
    </Link>
  );
}
