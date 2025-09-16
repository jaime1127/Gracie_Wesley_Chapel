import Carousel, { SwiperProps } from "../Carousel/Carousel";
import Promo, { PromoProps } from "../Promo/Promo";
import Feature, { FeatureProps } from "../Feature/Feature";
import Bento, { BentoProps } from "../Bento/Bento";
import Testimonials, { TestimonialsProps } from "../Testimonials/Testimonials";

export interface BlocksProps {
  blockSection: Array<
    PromoProps | SwiperProps | FeatureProps | BentoProps | TestimonialsProps
  >;
}

const componentMap: Record<string, any> = {
  Promo,
  FeatureList: Feature,
  Carousel,
  Testimonial: Testimonials,
  Bento,
};

export default async function Blocks({ blockSection }: BlocksProps) {
  return (
    <>
      {blockSection.map((block, index) => {
        const Component = block.__typename
          ? componentMap[block.__typename]
          : undefined;
        if (!Component) return null;
        return <Component key={index} {...block} />;
      })}
    </>
  );
}
