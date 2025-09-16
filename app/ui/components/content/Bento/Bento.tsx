import Image from "next/image";

export interface BentoProps {
 __typename: string | undefined;
  heading?: string | undefined | null;
  description?: string | undefined | null;
  largeBox?:
    | {
        eyebrow?: string | undefined | null;
        heading?: string | undefined | null;
        description?: string | undefined | null;
        asset?:
          | {
              url?: string | undefined | null;
              alt?: string | undefined | null;
            }
          | undefined
          | null;
      }[]
    | undefined
    | null;
  smallBox?:
    | {
        eyebrow?: string | undefined | null;
        heading?: string | undefined | null;
        description?: string | undefined | null;
        asset?:
          | {
              url?: string | undefined | null;
              alt?: string | undefined | null;
            }
          | undefined
          | null;
      }[]
    | undefined
    | null;
}

export default function Bento({
  heading,
  description,
  largeBox,
  smallBox,
}: BentoProps) {
  return (
    <div className="bg-white py-6 ">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        {heading && (
          <h2 className="text-base/7 font-semibold text-indigo-600 pr-6 pl-6">
            {heading}
          </h2>
        )}

        {description && (
          <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl pr-6 pl-6">
            {description}
          </p>
        )}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {largeBox?.map((box, idx) => (
            <div className="relative lg:col-span-3" key={idx}>
              <div className="absolute inset-0 rounded-lg bg-white lg:rounded-tr-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                <Image
                  alt={box?.asset?.alt || "Large Box Image"}
                  src={box?.asset?.url || "/IMG_8455.jpeg"}
                  className="h-80 object-cover object-left lg:object-right"
                  height={1000}
                  width={1000}
                />
                <div className="p-10 pt-4">
                  <h3 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                    {box?.eyebrow}
                  </h3>
                  <p className="mt-2 text-lg/8 text-gray-900 font-semibold">
                    {box?.heading}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                    {box?.description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-tr-4xl" />
            </div>
          ))}

          {smallBox?.map((box, idx) => (
            <div className="relative lg:col-span-2" key={idx}>
              <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-br-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                <Image
                  alt={box?.asset?.alt || "Small Box Image"}
                  src={box?.asset?.url || "/IMG_8455.jpeg"}
                  className="h-80 object-cover"
                  height={320}
                  width={480}
                />
                <div className="p-10 pt-4">
                  <h3 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                    {box?.eyebrow}
                  </h3>
                  <p className="mt-2 text-lg/8 text-gray-900 font-semibold">
                    {box?.heading}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                    {box?.description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
