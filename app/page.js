import "./page.css";
import "./globals.css"
import Hero from "./src/components/Hero/hero";
import HeaderImagePage from "@/public/Image/HeaderImage/HeaderImage";
// import HowItWorks from "@/public/Image/HowItWorks/HowItWorksImage";
import HowItWorksImage from "@/public/Image/howitworks/howitworks";
import HowItWorksSection from "./src/components/HowItWorks/how-it-works";

import WeComeToYou from "./src/components/WeComeToYou/WeComeToYou";
import WeCome from "@/public/Image/WeCome/WeCome";

import Recommend from "@/public/Image/Recommend/Recommend";
import RecommendScr from "./src/components/RecommendScr/RecommendScr";
import Link from "next/Link";

import { Aleo } from "next/font/google";
const aleo = Aleo({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={aleo.className}>
      <Link href="founders">This is the founders page</Link>
      <HeaderImagePage />
      <Hero />
      <HowItWorksImage />
      <HowItWorksSection />
      <WeCome/>
      <WeComeToYou/>
      <Recommend/>
      <RecommendScr/>
    </div>
  );
}
