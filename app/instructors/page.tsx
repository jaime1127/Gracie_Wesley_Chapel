import { Metadata } from "next";
import { fetchInstructorData } from "@/app/lib/content";
import { GetInstructorQuery } from "@/app/ui/components/generated/gql/types";
import { InstructorLayout } from "@/app/ui/instructors";

export const metadata: Metadata = {
  title: "Instructors",
};

export default async function Page() {
  const jiuJitsuInstructors = (await fetchInstructorData(
    "instructor-slug"
  )) as GetInstructorQuery;
  return (
    <main className="relative mx-auto max-w-7xl mb-4 pt-16 bg-white">
      <InstructorLayout {...jiuJitsuInstructors.instructorList} />
    </main>
  );
}
