// src/pages/index.js

import React from 'react';
import Link from 'next/link';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100vh',
    marginTop: '50px',
  };

  const categoryStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const rectangleStyle = {
    width: '350px',
    height: '500px',
    border: '2px solid black',
    margin: '15px',
    backgroundImage: 'url("/vetements.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    cursor: 'pointer', // Ajoutez cette ligne pour indiquer que c'est un lien cliquable
  };

  const textStyle = {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '18px',
  };

  return (
    <div>
      <div style={containerStyle}>
        <Link href="/vetements" passHref>
          <div style={categoryStyle}>
            <div style={rectangleStyle}></div>
            <p style={textStyle}>Vêtements</p>
          </div>
        </Link>
        
        <Link href="/brico" passHref>
          <div style={categoryStyle}>
            <div style={{ ...rectangleStyle, backgroundImage: 'url("/brico.png")' }}></div>
            <p style={textStyle}>Brico</p>
          </div>
        </Link>

        <Link href="/deco" passHref>
          <div style={categoryStyle}>
            <div style={{ ...rectangleStyle, backgroundImage: 'url("/deco.png")' }}></div>
            <p style={textStyle}>Décoration</p>
          </div>
        </Link>
      </div>
      {/* Le reste de votre contenu de page */}
    </div>
  );
};

export default Home;
