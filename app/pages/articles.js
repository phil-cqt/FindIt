import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ArticlePage = () => {
  const router = useRouter();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Define all articles
    const allArticles = [
      // Articles de vêtements
      { name: 'Jean troué', size: 'S-M-L-XL', price: '$25-$40', imageUrl: '/jean_troue.jpeg' },
      { name: 'T-shirt blanc col V', size: 'S-M-L', price: '$5-$15', imageUrl: '/t-shirt-col-v.jpg' },
      { name: 'Short de plage', size: 'S-XL', price: '$20-$30', imageUrl: '/short_de_bain.jpg' },
      { name: 'Casquette Nike', size: 'One Size', price: '$10-$15', imageUrl: '/casquette.jpg' },

      // Articles de bricolage
      { name: 'Perceuse Électrique', description: 'Perceuse puissante pour diverses tâches', price: '$50-$100', imageUrl: '/perceuse_electrique.jpg' },
      { name: 'Ensemble de Tournevis', description: 'Ensemble complet de tournevis pour les projets de bricolage', price: '$20-$40', imageUrl: '/ensemble_tournevis.jpg' },
      { name: 'Clé à Molette Réglable', description: 'Clé polyvalente pour serrer ou desserrer les écrous et les boulons', price: '$15-$30', imageUrl: '/cle_a_molette.jpg' },
      { name: 'Marteau', description: 'Marteau de base pour enfoncer et extraire les clous', price: '$10-$20', imageUrl: '/marteau.jpg' },

      // Articles de décoration
      { name: 'Cadre Photo en Bois', description: 'Cadre photo rustique en bois pour afficher vos souvenirs', price: '$20-$30', imageUrl: '/cadre_photo.jpg' },
      { name: 'Lampe de Table Moderne', description: 'Lampe de table contemporaine pour éclairer votre espace avec style', price: '$30-$50', imageUrl: '/lampe_table.jpg' },
      { name: 'Coussins Décoratifs', description: 'Ensemble de coussins décoratifs pour ajouter une touche de couleur à votre canapé', price: '$15-$25', imageUrl: '/coussins_deco.jpg' },
      { name: 'Plante Artificielle en Pot', description: 'Plante artificielle réaliste dans un pot en céramique pour ajouter de la verdure à votre maison', price: '$10-$20', imageUrl: '/plante_artificielle.jpg' },
    ];

    // Extract the article name from the router object
    const { articleName } = router.query;
    if (articleName) {
      // Find the article in the allArticles array
      const foundArticle = allArticles.find(article =>
        article.name.toLowerCase() === 'Jean troué'
      );
      
    }
    setArticle(allArticles[0]);
  }, [router.query]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg">
        {article ? (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image with border */}
            <div className="border border-gray-200">
              <img src={article.imageUrl} alt={article.name} className="w-full h-auto" />
            </div>
            {/* Item details */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.name}</h2>
              {article.size && <p className="text-gray-600">Taille : {article.size}</p>}
              {article.description && <p className="text-gray-600">{article.description}</p>}
              <p className="text-gray-600">Prix : {article.price}</p>
            </div>
          </div>
        ) : (
          <p>Article non trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;
