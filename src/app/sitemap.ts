import type { MetadataRoute } from "next";
import { getPublishedInstallations } from "@/lib/storage";
import { CAR_BRANDS } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zrauto.ru";
  const installations = await getPublishedInstallations();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/installations`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contacts`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  // Installation pages
  const installationPages: MetadataRoute.Sitemap = installations.map((inst) => ({
    url: `${baseUrl}/installations/${inst.slug}`,
    lastModified: new Date(inst.createdAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Auto-generated brand+model pages for SEO
  const brandModelPages: MetadataRoute.Sitemap = CAR_BRANDS.flatMap((brand) =>
    brand.models.map((model) => ({
      url: `${baseUrl}/installations/ustanovka-gbo-${brand.slug}-${model.toLowerCase().replace(/[\s-]+/g, "-")}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticPages, ...installationPages, ...brandModelPages];
}
