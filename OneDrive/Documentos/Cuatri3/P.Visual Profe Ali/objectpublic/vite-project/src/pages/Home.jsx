import React from 'react';
import Section from '../components/organisms/Section';
import Logo from '../components/organisms/Logo';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <Logo />
      <Section />
      <section className={styles.exploreSection}>
        <h2>Historia del Juego</h2>
        <div className={styles.imageGallery}>
          <img src="/src/assets/images/halo-banner1.jpeg" alt="Halo Banner 1" className={styles.sideImage} />
          <div className={styles.paragraphs}>
            <p>
              Halo es una franquicia de videojuegos de ciencia ficción militar creada por Bungie y actualmente desarrollada por 343 Industries. La serie se centra en una guerra interestelar entre la humanidad y una alianza de alienígenas conocida como el Covenant.
            </p>
            <p>
              Con gráficos impresionantes y una narrativa profunda, Halo se ha convertido en una de las franquicias más exitosas y queridas en la historia de los videojuegos.
            </p>
          </div>
          <img src="/src/assets/images/halo-banner2.jpeg" alt="Halo Banner 2" className={styles.sideImage} />
        </div>
      </section>
      <section className={styles.posterSection}>
        <h2>Carteles de Halo</h2>
        <div className={styles.posterGallery}>
          <img src="/src/assets/images/halo-poster1.jpeg" alt="Halo Poster 1" className={styles.posterImage} />
          <img src="/src/assets/images/halo-poster2.jpeg" alt="Halo Poster 2" className={styles.posterImage} />
          <img src="/src/assets/images/halo-poster3.jpeg" alt="Halo Poster 3" className={styles.posterImage} />
        </div>
      </section>
      <section className={styles.contactSection}>
        <h2>Redes Sociales</h2>
        <ul className={styles.socialList}>
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://www.twitter.com">Twitter</a></li>
          <li><a href="https://www.instagram.com">Instagram</a></li>
        </ul>
        <p className={styles.authorName}> HALO</p>
      </section>
    </div>
  );
}

export default Home;
