"use client";

import React from 'react';
import styles from './header.module.css'; // Custom CSS for styling the header
import {useState} from "react"
import Link from 'next/link';

export default function Header() {
  const [menu, setMenu] = useState(false)

  const handleClick = () =>{
    setMenu(!menu)
    console.log(menu)
  }

  return (
    <header>
      <button onClick={handleClick}>
        {menu ? "Close the menu" : "Open the menu"}
      </button>
      {menu && ( 
        <div className={styles.menu}>
          <ul>
            <li className={styles.button}><Link href="/">Home</Link></li>
            <li className={styles.button}><Link href="/founders">Meet the Founders</Link></li>
            {/* Add more links as needed */}
          </ul>
        </div>
      )}
      <div className="logo">
        <h1 className={styles.header}>🔥Fireplace Palace</h1>
      </div>
    </header>
  );
}

