import React from 'react';
import styles from './CardSkeleton.module.css';

const CardSkeleton = () => (
  <div className={styles.card}>
    <div className={styles.imagePlaceholder} />
    <div className={styles.contentPlacholderOne} />
    <div className={styles.contentPlacholderTwo} />
    <div className={styles.contentPlacholderThree} />
    <div className={styles.buttonPlaceholder} />
  </div>
);

export default CardSkeleton;
