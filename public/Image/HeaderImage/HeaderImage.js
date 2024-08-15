import Image from "next/image"
import React from "react"
import Image1 from"../HeaderImage/Image1.png"

//Make image component
//Create folder with image ❤
//Create image file ❤
//Create function for component ❤
//Import image from next.js ❤
//Render image from next and pass src
//Export image component
//Import image component into page.js

function HeaderImagePage() {
    return (
        <Image
        src={Image1}
        width={375}
        height={375}
        alt="Picture of the author"
      />
    );
  }

  export default HeaderImagePage;