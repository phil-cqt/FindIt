// src/components/Footer.js

import React from 'react';

const Footer = () => {
  const footerStyle = {
    marginTop: '50px', // Espace entre le contenu principal et le footer
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'right',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <p>Contact: PPEfindIt@gmail.com</p>
        <p>© 2024 FindIt. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
