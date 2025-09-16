"use client";

import { RichText, Hero } from "@/app/ui/components/content";
import { HeroProps } from "../components/content/Hero/Hero";
import { Faq } from "@/app/ui/aboutus";
import Map from "@/app/ui/aboutus/googleMap/Map";

import Image from "next/image";
import Values from "./Values/Values";

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

      <Map />

      {/* Image section */}
      <div className="xl:mx-auto xl:max-w-7xl">
        <Image
          src="/thegym.jpg"
          alt="Our Mission"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Our mission */}
      <div className="mx-auto max-w-7xl py-9 bg-white pr-6 pl-6">
        <RichText content={content[0].raw} />
      </div>
      <Faq />

      <Values />
    </main>
  );
}
