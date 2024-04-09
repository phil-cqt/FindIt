import React from "react";

const Aide = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Bienvenue sur l'application Find It !</h1>
        <p className=" text-lg mb-4">
          Notre plateforme répertorie une sélection de produits essentiels à votre quotidien, disponibles immédiatement ou presque. 
          Vous trouverez une variété d'articles, tels que des accessoires électroniques (chargeurs, écouteurs, batteries externes), 
          des articles de mode (t-shirts, pantalons, chaussures) ainsi que des produits cosmétiques, y compris du maquillage.
        </p>
        <p className=" text-lg mb-4">
          Sur Find It, nous avons privilégié la praticité en répertoriant les magasins proposant ces produits de première nécessité.
          Actuellement, nous couvrons les villes de Chaville, Versailles et Paris 15ème. Vous pouvez facilement explorer les magasins
          autour de vous dans ces zones.
        </p>
        <p className=" text-lg mb-4">
          En outre, notre plateforme vous permet de consulter les informations détaillées des magasins proposant les produits que vous recherchez.
          De plus, vous avez accès à une carte interactive de Google Maps pour localiser précisément chaque magasin en plus de leur adresse.
        </p>
        <p className=" text-lg mb-4">
          Nous espérons que Find It vous aidera à trouver rapidement ce que vous recherchez, où que vous soyez !
        </p>
      </div>
  );
};

export default Aide;
