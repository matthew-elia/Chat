import React from 'react';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div style={{ background: `#FFF`, height: `200px` }} className={styles.footer}></div>
  );
}

export default Footer;
