import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is Brazilian Jiu Jitsu (BJJ)?",
    answer:
      "Brazilian Jiu Jitsu is a martial art and self-defense system that focuses on grappling and ground fighting. It emphasizes technique and leverage, making it effective for people of all sizes and skill levels.",
  },
  {
    question: "Do I need prior experience to join?",
    answer:
      "Not at all! Our classes are designed for all skill levels, from complete beginners to advanced practitioners. Our instructors will guide you every step of the way.",
  },
  {
    question: "What should I wear to my first class?",
    answer:
      "For your first class, wear comfortable athletic clothing like a t-shirt and shorts. If you have a gi (uniform), feel free to bring it. We also have gis available for purchase or rental.",
  },
  {
    question: "Is Brazilian Jiu Jitsu safe?",
    answer:
      "Yes, safety is our top priority. Our instructors ensure that all techniques are taught in a controlled and safe environment. We encourage students to communicate with their training partners to prevent injuries.",
  },
  {
    question: "Can I bring my child to train?",
    answer:
      "Absolutely! We offer kids' classes designed to teach discipline, confidence, and self-defense in a fun and supportive environment.",
  },
  {
    question: "Do you offer classes for women?",
    answer:
      "Yes, we offer classes for everyone, including women-only classes that focus on self-defense, fitness, and building confidence in a supportive environment.",
  },
  {
    question: "How often should I train?",
    answer:
      "The frequency of training depends on your goals and schedule. Many students train 2-3 times per week, but you can adjust based on your availability and fitness level.",
  },
];

export default function Faq() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 bg-gray-100">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Frequently asked questions
        </h2>
        <dl className="mt-16 divide-y divide-white/10">
          {faqs.map((faq) => (
            <Disclosure
              key={faq.question}
              as="div"
              className="py-6 first:pt-0 last:pb-0"
            >
              <dt>
                <DisclosureButton className="group flex w-full items-start justify-between text-left ">
                  <span className="text-base/7 font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center text-gray-900">
                    <PlusSmallIcon
                      aria-hidden="true"
                      className="size-6 group-data-open:hidden"
                    />
                    <MinusSmallIcon
                      aria-hidden="true"
                      className="size-6 group-not-data-open:hidden"
                    />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" className="mt-2 pr-12">
                <p className="text-base/7 text-gray-600">{faq.answer}</p>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}
