import Image from "next/image";
import React from "react";
import Image2 from "../HowItWorks/how-it-works-1.png";

function HowItWorks() {
  return (
    <div>
      <Image
        src={Image2}
        alt="Description of the second image"
        width={375}
        height={375}
      />
    </div>
  );
}

export default HowItWorks;