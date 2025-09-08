import { Metadata } from "next";
import { fetchPortfolioData } from "@/app/lib/content";
import { GetPortfolioQuery } from "@/app/ui/components/generated/gql/types";
import { InstructorLayout } from "@/app/ui/instructors";

export const metadata: Metadata = {
  title: "Instructors",
};

export default async function Page() {
  const jiuJitsuInstructors = (await fetchPortfolioData(
    "portfolio-slug"
  )) as GetPortfolioQuery;
  return (
    <main className="relative mx-auto max-w-7xl mb-4 pt-16 bg-white">
      <InstructorLayout {...jiuJitsuInstructors.portfolio} />
    </main>
  );
}
