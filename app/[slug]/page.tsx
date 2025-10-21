import type { GetNewContentPageQuery } from "@/app/ui/components/generated/gql/types";
import { fetchNewContentPage } from "@/app/lib/content";
import { ContentPage } from "@/app/ui/components/content";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch data from Hygraph
  const content = (await fetchNewContentPage(slug)) as GetNewContentPageQuery;

  // Handle missing content
  if (!content?.contentPage) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl bg-white">
      <ContentPage {...content.contentPage} />
    </main>
  );
}
