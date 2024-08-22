import "./page.css";
import "./globals.css"
import Hero from "./src/components/Hero/hero";

import HowItWorksImages from "./src/components/HowItWorksComponents.module.css/howitworks";

import Reviews from "./src/components/reviews/reviews";

import { Aleo } from "next/font/google";

const aleo = Aleo({ subsets: ["latin"] });

export default function Home() {
  return ( 
    <div className={aleo.className}>
      <HowItWorksImages
        src='/Image1.png'
        alt='Header Image'
        header=''
        text=''/>
      <Hero />
      <Reviews/>
      <HowItWorksImages 
        src='/how-it-works-1.png'
        alt='How it works image'
        header='How It Works'
        text='Book a Consultation: Fill in this form 📝'/>
      <HowItWorksImages 
        src='/Image3.png' 
        alt='We come to you Image' 
        header='We come to you ...' 
        text="We come to your home to do an assessment of the space and to your style preference."/>
      <HowItWorksImages 
        src='/Image4.png' 
        alt='We recommend' 
        header='We recommend' 
        text="We send you a bespoke set of fireplace recommendations."/>
    </div>
  );
}
