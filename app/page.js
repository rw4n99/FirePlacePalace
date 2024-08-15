import "./page.css";
import Hero from "./src/components/Hero/hero";
import HeaderImagePage from "@/public/Image/HeaderImage/HeaderImage";
// import HowItWorks from "@/public/Image/HowItWorks/HowItWorksImage";
import HowItWorksImage from "@/public/Image/howitworks/howitworks";
import HowItWorksSection from "./src/components/HowItWorks/how-it-works";

import { Aleo } from "next/font/google";
const aleo = Aleo({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={aleo.className}>
      <HeaderImagePage />
      <Hero />
      <HowItWorksImage />
      <HowItWorksSection />
    </div>
  );
}
