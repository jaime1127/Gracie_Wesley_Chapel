import type { GetContentPageQuery } from "@/app/ui/components/generated/gql/types";

import { fetchContentPage } from "@/app/lib/content";
import {
  Bento,
  Hero,
  Carousel,
  Promo,
  Feature,
  Testimonials,
} from "@/app/ui/components/content";

export default async function Home() {
  const content = (await fetchContentPage("home-page")) as GetContentPageQuery;
  return (
    <main className="mx-auto max-w-7xl bg-white">
      {content.contentPage?.hero && (
        <Hero {...content.contentPage?.hero} video={true} />
      )}

      {content.contentPage?.bento && <Bento {...content.contentPage?.bento} />}

      <Feature />
      <Testimonials />

      {content.contentPage?.carousel?.[0] && (
        <Carousel {...content.contentPage?.carousel?.[0]} />
      )}

      {content.contentPage?.promo?.[0] && (
        <Promo {...content.contentPage?.promo?.[0]} />
      )}

      {content.contentPage?.carousel?.[1] && (
        <Carousel {...content.contentPage?.carousel?.[1]} />
      )}
    </main>
  );
}
