import { Blocks, RichText } from "@/app/ui/components/content";
import { BlocksProps } from "../Blocks/Blocks";
import { HeroProps } from "../Hero/Hero";
import { Hero } from "@/app/ui/components/content";

interface ContentPageProps {
  block?: BlocksProps | undefined | null;
  hero?: HeroProps | undefined | null;
  content?: any | undefined | null;
}

export default async function ContentPage({
  block,
  hero,
  content = [],
}: ContentPageProps) {
  return (
    <main className="mx-auto max-w-7xl bg-white">
      {hero && <Hero {...hero} video={true} />}
      <div className="py-9 bg-white pr-6 pl-6">
        {content && <RichText content={content.raw} />}
      </div>
      {block && <Blocks {...block} />}
    </main>
  );
}
