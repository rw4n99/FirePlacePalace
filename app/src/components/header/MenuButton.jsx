import React from "react";
import Image from "next/image";
import styles from './header.module.css'
const MenuButton = ({ src, alt, onClick }) => {
    return (
      <img className={styles.MenuButton}
        width={50}
        height={50}
        src={src} 
        alt={alt} 
        onClick={onClick} 
        style={{ cursor: 'pointer' }}
      />
    );
  };
  
  export default MenuButton;