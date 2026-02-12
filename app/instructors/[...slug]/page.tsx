import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import { fetchInstructorPage } from "@/app/lib/content";
import { GetInstructorSlugQuery } from "@/app/ui/components/generated/gql/types";

import Instructor from "../../ui/instructors/InstructorSlugPage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instructor Details",
};

export default async function InstructorPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await props.params;

  const data = (await fetchInstructorPage(
    slug.slug[0]
  )) as GetInstructorSlugQuery;

  // pass the actual instructor object
  const instructor = data?.instructorSlugPage ?? null;

  return (
    <main className="py-8 mx-auto max-w-7xl bg-white my-16">
      <h1 className="text-2xl font-bold">Instructor Page</h1>
      <Link
        href="/instructors"
        className="whitespace-nowrap font-semibold text-indigo-600 inline-flex gap-1.5 underline hover:no-underline"
      >
        Return to All Instructors Page
        <ArrowLongRightIcon className="h-6 w-6 text-indigo-600" />
      </Link>
      {instructor ? (
        <Instructor {...instructor} />
      ) : (
        <div>Instructor not found</div>
      )}
    </main>
  );
}
