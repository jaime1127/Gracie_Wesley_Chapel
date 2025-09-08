"use client";

import { RichText, Hero } from "@/app/ui/components/content";
import { HeroProps } from "../components/content/Hero/Hero";
import { Faq } from "@/app/ui/aboutus";

import Image from "next/image";

interface AboutUsProps {
  content?: any;
  hero?: HeroProps;
}

export default function AboutUs({ content = [], hero }: AboutUsProps) {
  return (
    <main className="relative">
      <Hero
        blog={hero?.blog}
        heading={hero?.heading}
        description={hero?.description}
        link={hero?.link}
        asset={hero?.asset}
        video={true}
        videoAsset={hero?.videoAsset}
      />

      <div className="mx-auto max-w-7xl py-9 bg-white">
        <h3 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Gym Location
        </h3>
        <iframe
          src="https://storage.googleapis.com/maps-solutions-g05phn0ug6/locator-plus/kqh6/locator-plus.html"
          width="100%"
          height="700"
          style={{
            border: 0,
            display: "block",
            marginTop: "2rem",
          }}
          loading="lazy"
        ></iframe>
      </div>

      {/* Image section */}
      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <Image
          src="/thegym.jpg"
          alt="Our Mission"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Our misson*/}
      <div className="mx-auto max-w-7xl py-9 bg-white">
        <RichText content={content[0].raw} />
      </div>
      <Faq />

      {/* Values Section */}
      <div className="mx-auto max-w-7xl p-9 bg-white">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Our Values
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            At Gracie Wesley Chapel, our values are the foundation of everything
            we do. They guide our teaching, our community, and our commitment to
            helping you grow both on and off the mats.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <dt className="font-semibold text-gray-900">Empower Growth</dt>
            <dd className="mt-1 text-gray-600">
              We believe in helping every student unlock their potential,
              whether you're a beginner or an advanced practitioner.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">
              Excellence in Instruction
            </dt>
            <dd className="mt-1 text-gray-600">
              Our instructors are dedicated to providing top-notch training,
              ensuring you learn proper techniques in a safe and supportive
              environment.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">
              Community and Respect
            </dt>
            <dd className="mt-1 text-gray-600">
              We foster a welcoming and respectful environment where everyone
              feels like part of the family.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">
              Self-Defense and Confidence
            </dt>
            <dd className="mt-1 text-gray-600">
              Learn practical self-defense skills while building confidence and
              mental resilience.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">Health and Fitness</dt>
            <dd className="mt-1 text-gray-600">
              Improve your physical fitness, flexibility, and overall well-being
              through the dynamic practice of Brazilian Jiu Jitsu.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">Lifelong Learning</dt>
            <dd className="mt-1 text-gray-600">
              Jiu Jitsu is a journey, and we are here to support you every step
              of the way as you grow and evolve.
            </dd>
          </div>
        </dl>
      </div>
    </main>
  );
}
