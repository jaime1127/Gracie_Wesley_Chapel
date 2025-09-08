import { Metadata } from "next";
import { Schedule } from "@/app/ui/schedule";

export const metadata: Metadata = {
  title: "Schedule",
};

export default async function Page() {
  return (
    <main>
      <Schedule />
    </main>
  );
}
