import { Metadata } from "next";
import { fetchContentPage } from "../lib/content";
import { GetContentPageQuery } from "@/app/ui/components/generated/gql/types";

import Aboutus from "@/app/ui/aboutus/Aboutus";

export const metadata: Metadata = {
  title: "About Us",
};

export default async function Page() {
  const content = (await fetchContentPage("about-us")) as GetContentPageQuery;

  const contentArray =
    content.contentPage && Array.isArray(content.contentPage.content)
      ? content.contentPage.content
      : [];

  return (
    <main>
      <Aboutus content={contentArray} />
    </main>
  );
}
