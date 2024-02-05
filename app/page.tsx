import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* section:hero */}
      <Hero />
      {/*section:camp  */}
      <Camp />
      {/* section:guide  */}
      <Guide />
      {/* section:features  */}
      <Features />
    </>
  );
}
