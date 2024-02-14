// src/components/Footer.js

import React from 'react';

const Footer = () => {
  const footerStyle = {
    marginTop: '50px', // Espace entre le contenu principal et le footer
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <p>Contact: PPEfindIt@gmail.com</p>
        <p>© 2023 Votre Nom ou Nom de l'Entreprise. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
