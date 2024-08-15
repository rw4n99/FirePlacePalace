import Image from "next/image";
import React from "react";
import Image3 from "../WeCome/Image3.png";

function WeCome() {
  return (
    <div>
      <Image
        src={Image3}
        alt="Description of the second image"
        width={375}
        height={375}
      />
    </div>
  );
}

export default WeCome;