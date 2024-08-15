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
        {menu ? "close the menu" : "open the menu"}

      </button>
      <div className="logo">
        <h1 className={styles.header}>🔥Fireplace Palace</h1>
        <ul>
        <li><Link onClick={handleClick} href="/">Home</Link></li>
        </ul>
      </div>
    </header>
  );
}

