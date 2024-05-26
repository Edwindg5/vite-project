import React from 'react';
import Grid from '../molecules/Grid';
import styles from './Section.module.css';

function Section() {
  return (
    <section className={styles.section}>
      <h2>Explora los Juegos de Halo</h2>
      <Grid />
    </section>
  );
}

export default Section;
