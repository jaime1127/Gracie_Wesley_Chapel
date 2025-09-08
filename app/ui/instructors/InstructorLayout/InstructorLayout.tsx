"use client";

import Instructors, { CollectionProps } from "../Instructors";

interface InstructorLayoutProps {
  collection?: CollectionProps[] | undefined | null;
  heading?: string | undefined | null;
  description?: string | undefined | null;
}

export default function InstructorLayout({
  collection = [],
  heading = "",
  description = "",
}: InstructorLayoutProps) {
  return (
    <div className="py-4">
      <div className="justify-items-center">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          {heading}
        </h1>
        <p className="text-lg text-gray-600 mt-2 text-center">{description}</p>
      </div>
      <div className="space-y-12">
        {collection?.map((collection, index) => (
          <Instructors
            key={index}
            heading={collection.heading}
            sets={collection.sets}
          />
        ))}
      </div>
    </div>
  );
}
