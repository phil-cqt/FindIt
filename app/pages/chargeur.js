import React from 'react';
import Header from '../components/Header';

const Brico = () => {
  // Liste des outils avec leurs détails et URL d'image
  const outils = [
    { nom: 'Perceuse Électrique', description: 'Perceuse puissante pour diverses tâches', prix: '$50 - $100', imageUrl: '/Perceuse.jpg' },
    { nom: 'Ensemble de Tournevis', description: 'Ensemble complet de tournevis pour les projets de bricolage', prix: '$20 - $40', imageUrl: '/ensemble_tournevis.jpg' },
    { nom: 'Clé à Molette Réglable', description: 'Clé polyvalente pour serrer ou desserrer les écrous et les boulons', prix: '$15 - $30', imageUrl: '/cle_a_molette.jpg' },
    { nom: 'Marteau', description: 'Marteau de base pour enfoncer et extraire les clous', prix: '$10 - $20', imageUrl: '/marteau.jpg' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold m-4 text-center">Bricolage</h1>
      {/* Rendu des cartes pour chaque outil */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {outils.map((outil, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image avec bordure */}
            <div className="border border-gray-200">
              <img src={outil.imageUrl} alt={outil.nom} className="w-full h-auto" />
            </div>
            {/* Détails de l'outil */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{outil.nom}</h2>
              <p className="text-gray-600">{outil.description}</p>
              <p className="text-gray-600">Prix: {outil.prix}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Autre contenu de la page */}
    </div>
  );
};

export default Brico;
