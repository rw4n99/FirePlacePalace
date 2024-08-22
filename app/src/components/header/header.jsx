"use client";

import React from 'react';
import styles from './header.module.css';
import {useState} from "react"
import Link from 'next/link';

import MenuButton from './MenuButton'

export default function Header() {
  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
  }

  return (
<header className={styles.container}>
  <h1 className={styles.header}>🔥 Fireplace Palace</h1>
    <MenuButton 
    src='/OpenMenu.png' 
    alt='Open Menu' 
    onClick={handleClick}
    className={styles.MenuButton}
  />
  {menu && ( 
    <div className={styles.menu}>
      <MenuButton 
    src='/CloseMenu.png' 
    alt='Close Menu' 
    onClick={handleClick}
    className={styles.MenuButton}/>
      <ul>
        <li className={styles.button} onClick={handleClick}><Link href="/">Home</Link></li>
        <li className={styles.button} onClick={handleClick}><Link href="/founders">Meet the Founders</Link></li>
        <li className={styles.button} onClick={handleClick}><Link href="/bookings">Bookings</Link></li>
      </ul>
    </div>
  )}
</header>

  );
}

