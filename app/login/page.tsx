import { Metadata } from "next";
import { Login } from "@/app/ui/login";

export const metadata: Metadata = {
  title: "Login",
};

export default async function Page() {
  return (
    <main>
      <Login />
    </main>
  );
}
