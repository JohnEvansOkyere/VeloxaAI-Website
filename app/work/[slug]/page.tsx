import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CaseStudyView from "@/components/CaseStudyView";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

// Slugs with a bespoke page under app/work/<slug>/ are served by that route,
// not by this generic renderer.
const CUSTOM_SLUGS = new Set(["fabrication-ops-platform"]);

export function generateStaticParams() {
  return caseStudies
    .filter((study) => !CUSTOM_SLUGS.has(study.slug))
    .map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Case study not found" };
  }

  return {
    title: study.title,
    description: study.metaDescription,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      type: "article",
      title: study.title,
      description: study.metaDescription,
      url: `/work/${study.slug}`,
      images: ["/opengraph-image"],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-navy-950">
      <Navigation />
      <CaseStudyView study={study} />
      <Footer />
    </main>
  );
}
