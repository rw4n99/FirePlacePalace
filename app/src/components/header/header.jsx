"use client";

import React from 'react';
import styles from './header.module.css';
import {useState} from "react"
import Link from 'next/link';

export default function Header() {
  const [menu, setMenu] = useState(false)

  const handleClick = () =>{
    setMenu(!menu)
    console.log(menu)
  }

  return (
    <header className={styles.container}>
      <h1 className={styles.header}>🔥 Fireplace Palace</h1>
      <button className={styles.menuButton} onClick={handleClick}>
        {menu ? "Close the menu" : "Open the menu"}
      </button>
      {menu && ( 
        <div className={styles.menu}>
          <ul>
            <li className={styles.button}><Link href="/">Home</Link></li>
            <li className={styles.button}><Link href="/founders">Meet the Founders</Link></li>
            <li className={styles.button}><Link href="/bookings">Bookings</Link></li>
            {/* Add more links as needed */}
          </ul>
        </div>
      )}
    </header>
  );
}

