import React from "react";
import Image from "next/image";
import styles from '../header/header.module.css'

export default function MenuButton({src, alt}) {
    return (
        <div>
        <Image className={styles.MenuButton}
            height={50}
            width={50}
            src={src}
            alt={alt}
        />            
        </div>
    )
}