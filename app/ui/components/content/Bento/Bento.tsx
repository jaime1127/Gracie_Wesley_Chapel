export default function Bento() {
  return (
    <div className="bg-white py-6 ">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-600">
          Elevate Your Training
        </h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
          Discover the Benefits of Brazilian Jiu Jitsu
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt="BJJ Training"
                src="/IMG_8447.jpeg"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  Training
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Build Skill and Confidence
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Master the art of Brazilian Jiu Jitsu with expert instruction
                  and personalized guidance. Perfect for all skill levels.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-tr-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt="Community"
                src="/IMG_8455.jpeg"
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  Community
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Join a Supportive Team
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Train alongside a welcoming and supportive community that
                  motivates you to grow both on and off the mats.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-tr-4xl" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-bl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt="Self-Defense"
                src="/IMG_6389.jpeg"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  Self-Defense
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Learn Practical Techniques
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Gain the skills and confidence to protect yourself in
                  real-life situations with proven self-defense techniques.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-bl-4xl" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <img
                alt="Fitness"
                src="/IMG_8442.jpeg"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  Fitness
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Improve Your Health
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Enhance your physical fitness, flexibility, and endurance
                  while enjoying the dynamic and engaging practice of Jiu Jitsu.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-br-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt="Competition"
                src="crop_4918-1024x466.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  Competition
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Test Your Skills
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Challenge yourself and showcase your progress by competing in
                  local and national Brazilian Jiu Jitsu tournaments.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
