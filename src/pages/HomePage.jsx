import React from 'react';
import NavBar from '../components/molecules/NavBar';
import GameList from '../components/organisms/GameList';
import './HomePage.css';

function HomePage() {
  const games = [
    { id: 1, title: 'Juego 1', image: '/src/assets/images/game1.jpeg' },
    { id: 2, title: 'Juego 2', image: '/src/assets/images/game2.jpeg' },
    { id: 3, title: 'Juego 3', image: '/src/assets/images/game3.jpeg' },
  ];

  return (
    <div className="home-page">
      <NavBar />
      <section id="inicio">
        <h1>Videojuegos</h1>
        <div className="game-list">
          <GameList games={games} />
        </div>
      </section>
      <section id="explorar" className="explore-section">
        <h2>Cosas Interesantes sobre Videojuegos</h2>
        <p>Explora los datos más interesantes y las novedades en el mundo de los videojuegos. Aquí encontrarás información sobre los últimos lanzamientos, reseñas, avances tecnológicos y mucho más.</p>
        <p>Los videojuegos han evolucionado enormemente desde sus inicios, y hoy en día ofrecen experiencias inmersivas y emocionantes para jugadores de todas las edades.</p>
      </section>

      <section id="contacto" className="contact-section">
        <h2>Redes Sociales</h2>
        <ul className="social-list">
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
        <p className="author-name">Ing. Edwin de Jesús</p>
      </section>
    </div>
  );
}

export default HomePage;
