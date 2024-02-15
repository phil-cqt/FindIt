import React from 'react';
import Header from '../components/Header';

const Deco = () => {
  // Liste des articles de décoration avec leurs détails et URL d'image
  const articlesDeco = [
    { nom: 'Cadre Photo en Bois', description: 'Cadre photo rustique en bois pour afficher vos souvenirs', prix: '$20 - $30', imageUrl: '/cadre_photo.jpg' },
    { nom: 'Lampe de Table Moderne', description: 'Lampe de table contemporaine pour éclairer votre espace avec style', prix: '$30 - $50', imageUrl: '/lampe.jpeg' },
    { nom: 'Coussins Décoratifs', description: 'Ensemble de coussins décoratifs pour ajouter une touche de couleur à votre canapé', prix: '$15 - $25', imageUrl: '/coussins_deco.jpg' },
    { nom: 'Plante Artificielle en Pot', description: 'Plante artificielle réaliste dans un pot en céramique pour ajouter de la verdure à votre maison', prix: '$10 - $20', imageUrl: '/plante_artificielle.jpg' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold m-4 text-center">Décoration</h1>
      {/* Rendu des cartes pour chaque article de décoration */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articlesDeco.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image avec bordure */}
            <div className="border border-gray-200">
              <img src={article.imageUrl} alt={article.nom} className="w-full h-auto" />
            </div>
            {/* Détails de l'article de décoration */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.nom}</h2>
              <p className="text-gray-600">{article.description}</p>
              <p className="text-gray-600">Prix: {article.prix}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Autre contenu de la page */}
    </div>
  );
};

export default Deco;
