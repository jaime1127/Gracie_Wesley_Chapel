import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
};

export default async function Page() {
  return (
    <main>
      <iframe
        id="idZenPlannerFrame"
        className="w-full h-[981px] my-16"
        src="https://graciewesleychapel.zenplanner.com/zenplanner/portal/calendar.cfm?frame=true"
        frameBorder="0"
      ></iframe>
    </main>
  );
}
