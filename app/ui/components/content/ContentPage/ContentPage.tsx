import { Blocks } from "@/app/ui/components/content";
import { BlocksProps } from "../Blocks/Blocks";
import { HeroProps } from "../Hero/Hero";
import { Hero } from "@/app/ui/components/content";

interface ContentPageProps {
  block?: BlocksProps | undefined | null;
  hero?: HeroProps | undefined | null;
}

export default async function ContentPage({ block, hero }: ContentPageProps) {
  return (
    <main className="mx-auto max-w-7xl bg-white">
      {hero && <Hero {...hero} video={true} />}
      {block && <Blocks {...block} />}
    </main>
  );
}
