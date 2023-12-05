import { CalendarForm } from "@/components/form-example";
import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CalendarForm />
    </main>
  );
}
