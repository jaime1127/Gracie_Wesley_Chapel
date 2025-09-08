// import Carousel from "../Carousel/Carousel";
// import Hero from "../Hero/Hero";
// import Promo from "../Promo/Promo";

// type Block =
//   | {
//       __typename: "Hero";
//       id: string;
//       heading: string;
//       image: { url: string; altText?: string };
//     }
//   | {
//       __typename: "Carousel";
//       id: string;
//       items: {
//         id: string;
//         title: string;
//         image: { url: string; altText?: string };
//       }[];
//     }
//   | { __typename: "Promo"; id: string; text: string; link: string }
//   | {
//       __typename: "Collection";
//       id: string;
//       title: string;
//       products: { id: string; name: string; price: number }[];
//     };

// type BlocksProps = {
//   sections: Block[];
// };

// export function Blocks({ sections }: BlocksProps) {
//   return (
//     <>
//       {sections.map((section) => {
//         {
//           section.__typename === "Hero" && (
//             <Hero
//               key={section.id}
//               heading={section.heading}
//               image={section.image}
//             />
//           );
//         }
//         {
//           section.__typename === "Carousel" && (
//             <Carousel key={section.id} items={section.items} />
//           );
//         }
//         {
//           section.__typename === "Promo" && (
//             <Promo key={section.id} text={section.text} link={section.link} />
//           );
//         }
//       })}
//     </>
//   );
// }
