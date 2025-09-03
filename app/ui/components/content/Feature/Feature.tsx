import {
  ShieldCheckIcon,
  HandRaisedIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";

import Image from "next/image";

const features = [
  {
    name: "Striking: Muay Thai",
    description:
      "Master the art of striking with our Muay Thai classes. Learn powerful techniques like punches, kicks, elbows, and knees while improving your fitness and coordination.",
    icon: HandRaisedIcon,
  },
  {
    name: "Grappling: Wrestling & BJJ",
    description:
      "Develop your grappling skills with our wrestling and Brazilian Jiu Jitsu classes. Learn takedowns, submissions, and ground control in a safe and supportive environment.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Mixed Martial Arts (MMA)",
    description:
      "Combine striking and grappling techniques in our MMA classes. Perfect for those looking to train like a fighter or take their skills to the next level.",
    icon: UsersIcon,
  },
];

export default function Feature() {
  return (
    <div className="overflow-hidden bg-gray-100 py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                Train with the Best
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                Striking, Grappling, and MMA
              </p>
              <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
                Whether you're looking to improve your striking, master
                grappling techniques, or train in MMA, we have classes tailored
                to your goals. Join us and take your skills to the next level.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-600 dark:text-indigo-400"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Training sessions"
            src="/IMG_8447.jpeg"
            width={2432}
            height={1442}
            className="w-3xl rounded-xl shadow-xl ring-1 ring-gray-400/10  sm:w-228 md:-ml-4 lg:-ml-0 dark:ring-white/10"
          />
        </div>
      </div>
    </div>
  );
}
