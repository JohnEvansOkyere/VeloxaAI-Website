import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";

const siteUrl = "https://veloxatech.tech";

const staticRoutes = [
  { path: "", priority: 1 },
  { path: "/veloxarecruit", priority: 0.8 },
  { path: "/smartmatch", priority: 0.8 },
  { path: "/leadgen", priority: 0.8 },
  { path: "/whatsapp", priority: 0.8 },
  { path: "/telegram", priority: 0.8 },
  { path: "/demoforge", priority: 0.8 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
  { path: "/security", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      priority,
    })),
    ...caseStudies.map((study) => ({
      url: `${siteUrl}/work/${study.slug}`,
      lastModified,
      priority: 0.9,
    })),
  ];
}
