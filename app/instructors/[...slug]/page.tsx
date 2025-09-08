import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Instructor Details",
};

export default async function InstructorPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await props.params;

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
      <p className="mt-4 text-lg text-gray-600">
        You are viewing the instructor page for: <strong>{slug.slug[0]}</strong>
      </p>
    </main>
  );
}
