import Image from "next/image";
import React from "react";
import Image4 from "../Recommend/Image4.png";

function Recommend() {
  return (
    <div>
      <Image
        src={Image4}
        alt="Description of the second image"
        width={375}
        height={375}
      />
    </div>
  );
}

export default Recommend;