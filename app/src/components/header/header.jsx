import React from 'react';
import styles from './header.module.css'; // Custom CSS for styling the header

function Header() {
  return (
    <header>
      <div className="logo">
        <h1 className={styles.header}>🔥Fireplace Palace</h1>
      </div>
    </header>
  );
}

export default Header;