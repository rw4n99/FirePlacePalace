import Image from "next/image";
import React from "react";
import styles from './HowItWorks.module.css'
//Create component for all images of the sections
function HowItWorksImages ({src, alt, header, text}) {
  return (
    <div>
      <Image 
        width={375}
        height={375}
        src={src}
        alt={alt}
      />
      <h1 className={styles.header}>{header}</h1>
      <h2 className={styles.text}>{text}</h2>
    </div>
  )
}

export default HowItWorksImages;

