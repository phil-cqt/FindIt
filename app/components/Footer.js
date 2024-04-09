import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <p>Pour toutes questions ou si vous souhaitez que nous ajoutions les produits de votre magasin, vous pouvez nous contacter à cette adresse email : <a href="mailto:PPEfindIt@gmail.com" style={linkStyle}>PPEfindIt@gmail.com</a></p>
        <p>© 2024 FindIt. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
