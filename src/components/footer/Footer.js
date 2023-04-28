import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <p>Coded with ❤️ by Rucha Patil</p>
    <p>|</p>
    <Link to="https://github.com/Rucha1499/rick-and-morty-character-profiles" target="_blank" rel="noreferrer"><p>Github</p></Link>
  </div>
);

export default Footer;
