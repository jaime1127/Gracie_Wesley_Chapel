import {
  ShieldCheckIcon,
  HandRaisedIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const icons: {
  Hand: React.FC<React.SVGProps<SVGSVGElement>>;
  Shield: React.FC<React.SVGProps<SVGSVGElement>>;
  Users: React.FC<React.SVGProps<SVGSVGElement>>;
} = {
  Hand: HandRaisedIcon,
  Shield: ShieldCheckIcon,
  Users: UsersIcon,
};

export interface FeatureProps {
  __typename: string | undefined;
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
  feature?:
    | {
        title?: string | undefined | null;
        description?: string | undefined | null;
      }[]
    | undefined
    | null;
}

export default function Feature({
  heading,
  eyebrow,
  description,
  asset,
  feature,
}: FeatureProps) {
  return (
    <div className="overflow-hidden bg-gray-100 py-10 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                {heading}
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                {eyebrow}
              </p>
              <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
                {description}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                {feature?.map((feature, index) => {
                  const iconKeys = Object.keys(icons) as (keyof typeof icons)[];
                  const Icon =
                    icons[iconKeys[index % iconKeys.length]] || icons.Shield;
                  return (
                    <div key={index} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900 dark:text-white">
                        <Icon className="absolute top-1 left-1 size-5 text-indigo-600 dark:text-indigo-400" />
                        {feature.title}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
          {asset && (
            <Image
              alt={asset?.alt || "Feature Image"}
              src={asset?.url || "/IMG_6389.jpeg"}
              width={2432}
              height={1442}
              className="w-3xl rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 dark:ring-white/10"
            />
          )}
        </div>
      </div>
    </div>
  );
}
