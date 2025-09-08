import { Metadata } from "next";
import { fetchContentPage } from "@/app/lib/content";
import { GetContentPageQuery } from "@/app/ui/components/generated/gql/types";

import { Aboutus } from "@/app/ui/aboutus/";

export const metadata: Metadata = {
  title: "About Us",
};

export default async function Page() {
  const content = (await fetchContentPage("about-us")) as GetContentPageQuery;

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
