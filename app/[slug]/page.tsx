import type { GetNewContentPageQuery } from "@/app/ui/components/generated/gql/types";
import { fetchNewContentPage } from "@/app/lib/content";
import { ContentPage } from "@/app/ui/components/content";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Fetch data from Hygraph
  const content = (await fetchNewContentPage(slug)) as GetNewContentPageQuery;

  // If no content, trigger Next.js 404 page
  if (!content?.contentPage) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl bg-white">
      <ContentPage {...content.contentPage} />
    </main>
  );
}
