import type { GetNewContentPageQuery } from "@/app/ui/components/generated/gql/types";

import { fetchNewContentPage } from "@/app/lib/content";
import { ContentPage } from "@/app/ui/components/content";

export default async function Home() {
  const content = (await fetchNewContentPage(
    "home-page"
  )) as GetNewContentPageQuery;

  return (
    <main className="mx-auto max-w-7xl bg-white">
      <ContentPage {...content.contentPage} />
    </main>
  );
}
