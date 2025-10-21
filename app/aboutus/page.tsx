import { Metadata } from "next";
import { fetchNewContentPage } from "@/app/lib/content";
import { GetNewContentPageQuery } from "@/app/ui/components/generated/gql/types";

import { Aboutus } from "@/app/ui/aboutus/";

export const metadata: Metadata = {
  title: "About Us",
};

export default async function Page() {
  const content = (await fetchNewContentPage(
    "about-us"
  )) as GetNewContentPageQuery;

  const richText =
    content.contentPage && Array.isArray(content.contentPage.content)
      ? content.contentPage.content
      : [];

  return (
    <main>
      <Aboutus content={richText} hero={{ ...content.contentPage?.hero }} />
    </main>
  );
}
