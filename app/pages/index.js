// index.js

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
    width: '375px',
    height: '500px',
    border: '2px solid black',
    margin: '15px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    cursor: 'pointer',
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
        <Link href="/select-city?productType=chargeur" passHref>
          <div style={categoryStyle}>
            <div style={{ ...rectangleStyle, backgroundImage: 'url("/chargeur.jpg")' }}></div>
            <p style={textStyle}>Chargeurs</p>
          </div>
        </Link>
        
        <Link href="/select-city?productType=cable" passHref>
          <div style={categoryStyle}>
            <div style={{ ...rectangleStyle, backgroundImage: 'url("/UsbC.jpg")' }}></div>
            <p style={textStyle}>Câbles</p>
          </div>
        </Link>

        <Link href="/select-city?productType=plug" passHref>
          <div style={categoryStyle}>
            <div style={{ ...rectangleStyle, backgroundImage: 'url("/plug.jpg")' }}></div>
            <p style={textStyle}>Blocs de connection</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
