import React from 'react';

const Footer = () => {
  const footerStyle = {
    marginTop: '50px', // Espace entre le contenu principal et le footer
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    marginRight: '10px',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <p>Pour toutes questions ou si vous souhaitez que nous ajoutions les produits de votre magasin, vous pouvez nous contacter à cette adresse email : <a href="mailto:PPEfindIt@gmail.com" style={linkStyle}>PPEfindIt@gmail.com</a></p>
        <p>© 2024 FindIt. Tous droits réservés.</p>
      </div>
      <div>
        {/* Ajoutez ici d'autres éléments de footer si nécessaire */}
      </div>
    </footer>
  );
};

export default Footer;
