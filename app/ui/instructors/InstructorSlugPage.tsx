"use client";

import Image from "next/image";

export interface InstructorPageProps {
  name?: string | undefined | null;
  position?: string | undefined | null;
  rank?: string | undefined | null;
  description?: string | undefined | null;
  image?:
    | {
        url?: string | undefined;
        alt?: string | null | undefined;
      }
    | undefined
    | null;
  contactInfo?:
    | {
        phone?: string | null | undefined;
        email?: string | null | undefined;
      }
    | null
    | undefined;
}

export default function Instructor({
  name = "Name",
  position = "Position",
  rank = "Rank",
  description = "Description",
  image = {
    url: "/gracie.jpg",
    alt: "Instructor Image",
  },
  contactInfo = { phone: null, email: null },
}: InstructorPageProps) {
  return (
    <div className="px-8 py-20 bg-gray-100 my-16">
      <div className="grid grid-cols-1 gap-y-16 gap-x-12 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="w-full">
          <Image
            src={image?.url || "/gracie.jpg"}
            alt={image?.alt || "Instructor Image"}
            height={1200}
            width={900}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-semibold text-gray-900">{name}</h1>
          <div className="mt-6">
            <h2 className="text-lg font-semibold  text-gray-800">Position</h2>
            <div className=" text-lg text-gray-600">{position}</div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">Rank</h2>
            <div className="text-lg text-gray-600 ">
              {" "}
              Brazilian Jiu Jitsu {rank}
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">About Me</h2>
            <p className="text-lg text-gray-600">{description}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">
              **Available For Private Lessons**
            </h2>
            <p className="text-lg text-gray-600">
              Available for private lessons for kids and adults — one‑on‑one or
              small group sessions tailored to each student’s goals and
              experience. Flexible scheduling and lesson plans; contact me to
              book or ask about availability.
            </p>
          </div>

          {contactInfo && (
            <div className="mt-6">
              <h3 className="text-md font-semibold text-gray-800">Contact</h3>
              <ul className="mt-2 text-gray-700 space-y-1">
                {contactInfo?.phone && (
                  <li>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-indigo-600 underline"
                    >
                      {contactInfo.phone}
                    </a>
                  </li>
                )}
                {contactInfo?.email && (
                  <li>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-indigo-600 underline"
                    >
                      {contactInfo.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
