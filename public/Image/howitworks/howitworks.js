import Image from "next/image";
import React from "react";

// function HowItWorks() {
//   return (
//     <div>
//       <Image
//         src={Image2}
//         alt="Description of the second image"
//         width={375}
//         height={375}
//       />
//     </div>
//   );
// }

//Create component for all images of the sections
function HowItWorksImages ({src, alt, text, bodyText}) {
  return (
    <div>
      <Image 
        width={375}
        height={375}
        src={src}
        alt={alt}
      />
      <h1>{text}</h1>
      <h2>{bodyText}</h2>
    </div>
  )
}

//Name it howItWorksImages
//Needs src prop and specify attribute
//Render component with different data



export default HowItWorksImages;