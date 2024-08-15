import Image from "next/image";
import React from "react";
import Image2 from "../HowItWorks/how-it-works-1.png";

function HowItWorks() {
  return (
    <div>
      <h2>How It Works</h2>
      <Image
        src={Image2}
        alt="Description of the second image"
        width={500}
        height={500}
      />
    </div>
  );
}

export default HowItWorks;