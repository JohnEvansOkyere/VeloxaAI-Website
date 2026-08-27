import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";

const siteUrl = "https://www.veloxatech.tech";

// lastModified is set per route to the date that page's content actually
// changed — using a fresh Date() on every build would falsely tell search
// engines every page changes on every deploy, diluting the freshness signal.
const staticRoutes = [
  { path: "", priority: 1, lastModified: "2026-08-27" },
  { path: "/veloxarecruit", priority: 0.8, lastModified: "2026-08-27" },
  { path: "/smartmatch", priority: 0.8, lastModified: "2026-08-27" },
  { path: "/leadgen", priority: 0.8, lastModified: "2026-08-27" },
  { path: "/whatsapp", priority: 0.8, lastModified: "2026-08-27" },
  { path: "/telegram", priority: 0.8, lastModified: "2026-08-27" },
  { path: "/demoforge", priority: 0.8, lastModified: "2026-08-27" },
  { path: "/privacy", priority: 0.3, lastModified: "2026-08-27" },
  { path: "/terms", priority: 0.3, lastModified: "2026-08-27" },
  { path: "/security", priority: 0.3, lastModified: "2026-08-27" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map(({ path, priority, lastModified }) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      priority,
    })),
    ...caseStudies.map((study) => ({
      url: `${siteUrl}/work/${study.slug}`,
      lastModified: "2026-08-27",
      priority: 0.9,
    })),
  ];
}
