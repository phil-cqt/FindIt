// index.js

// Import des modules React et Next.js
import React from "react";
import Link from "next/link";

// Composant Home
const Home = () => {
  // Styles CSS en ligne pour le conteneur principal
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100vh",
    marginTop: "50px",
  };

  // Styles CSS en ligne pour les catégories
  const categoryStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  // Styles CSS en ligne pour les rectangles des produits
  const rectangleStyle = {
    width: "375px",
    height: "500px",
    border: "2px solid black",
    margin: "15px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer",
  };

  // Styles CSS en ligne pour les textes des produits
  const textStyle = {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "10px",
    fontSize: "18px",
  };

  // Fonction pour rendre la structure JSX de la page d'accueil
  return (
    <div className="bg-gray-300 p-10">
      {/* Titre de la catégorie Electronique */}
      <h1 className="text-3xl font-bold text-center pt-10">Electronique</h1>
      {/* Conteneur des produits de la catégorie Electronique */}
      <div className="flex justify-center m-10">
        <div className="flex justify-between">
          {/* Liens vers la page de sélection de ville pour chaque produit */}
          <Link href="/select-city?productType=chargeurs" passHref>
            {/* Rectangle du produit */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer mr-4 w-64">
              {/* Image du produit */}
              <img
                src="/chargeur.jpg"
                alt="Chargeurs"
                className="object-cover rounded-lg h-48 w-full mb-4"
              />
              {/* Texte du produit */}
              <p className="text-lg font-semibold">Chargeurs</p>
            </div>
          </Link>
          {/* Répéter la même structure pour les autres produits */}
        </div>
      </div>
      {/* Répéter la même structure pour les autres catégories et produits */}
    </div>
  );
};

// Export du composant Home
export default Home;
