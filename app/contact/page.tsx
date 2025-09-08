import { Metadata } from "next";
import { Contact } from "@/app/ui/contact";

export const metadata: Metadata = {
  title: "Contact",
};

export default async function Page() {
  return (
    <main>
      <Contact />
    </main>
  );
}
