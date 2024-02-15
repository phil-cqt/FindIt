import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../public/finditLogo.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      router.push(`/articles?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#333', // Couleur de fond de l'en-tête, à personnaliser
    color: '#fff', // Couleur du texte, à personnaliser
  };

  const logoStyle = {
    width: '100px', // Ajustez la taille de votre logo
  };

  const searchBarStyle = {
    marginLeft: '10px', // Ajustez la marge entre le logo et la barre de recherche
    flex: '1', // Pour permettre à la barre de recherche de prendre plus de place
  };

  const buttonStyle = {
    marginLeft: '10px', // Ajustez la marge entre les boutons
  };

  const compteButtonStyle = {
    marginRight: '10px', // Ajout de marge à droite pour le bouton "Compte"
  };

  const inputStyle = {
    color: '#333', // Couleur du texte dans la barre de recherche
    backgroundColor: '#fff', // Couleur de fond dans la barre de recherche
    border: '1px solid #ccc', // Bordure pour la barre de recherche
    padding: '5px', // Espace intérieur dans la barre de recherche
    width: '100%', // Ajustez la largeur de la barre de recherche
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <div style={headerStyle}>
      {/* Logo button */}
      <button onClick={handleLogoClick}>
        <Image src={logo} alt="Logo" style={logoStyle} />
      </button>
      <div className="search-bar" style={searchBarStyle}>
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Rechercher..." 
            style={inputStyle} 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </form>
      </div>
      <div className="right-buttons" style={buttonStyle}>
        <button style={compteButtonStyle}>Compte</button>
        <button>Aide</button>
      </div>
    </div>
  );
};

export default Header;