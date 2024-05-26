import React from 'react';
import logo from '../../assets/images/halo-logo.jpeg';
import styles from './Logo.module.css';

function Logo() {
  return (
    <img src={logo} alt="Halo Logo" className={styles.logo} />
  );
}

export default Logo;
