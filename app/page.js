import "./page.css";
import "./globals.css"
import Hero from "./src/components/Hero/hero";
import HeaderImagePage from "@/public/Image/HeaderImage/HeaderImage";
// import HowItWorks from "@/public/Image/HowItWorks/HowItWorksImage";
import HowItWorksImages from "@/public/Image/howitworks/howitworks";

import HowItWorksSection from "./src/components/HowItWorks/how-it-works";

import WeComeToYou from "./src/components/WeComeToYou/WeComeToYou";

import RecommendScr from "./src/components/RecommendScr/RecommendScr";

import Reviews from "./src/components/reviews/reviews";

import { Aleo } from "next/font/google";
import Link from 'next/link'; // Import the Link component

const aleo = Aleo({ subsets: ["latin"] });

export default function Home() {
  return ( 
    <div className={aleo.className}>
      <HeaderImagePage />
      <Hero />
      <Reviews/>
      <HowItWorksImages src='/how-it-works-1.png' alt='How it works image' text='Rowan'/>
      <HowItWorksSection />
      <HowItWorksImages src='/Image3.png' alt='We come to you Image' text='We come to you ...' bodyText="sdlkhalv"/>
      <WeComeToYou/>
      <RecommendScr/>
    </div>
  );
}
