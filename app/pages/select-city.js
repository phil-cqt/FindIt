import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Définition du composant SelectCityPage
const SelectCityPage = () => {
  // Récupération de l'objet router pour gérer la navigation
  const router = useRouter();
  // Définition des états pour le type de produit et la localisation actuelle
  const [productType, setProductType] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null);

  // Fonction pour gérer la sélection de la ville
  const handleCitySelection = (city) => {
    // Vérification que le type de produit est sélectionné avant de changer de page
    if (productType !== "") {
      console.log(
        `Ville sélectionnée : ${city}, Type de produit : ${productType}`
      );
      // Redirection vers la page des produits avec la ville et le type de produit sélectionnés
      router.push(`/products/${city}?productType=${productType}`);
    } else {
      console.error(
        "Veuillez sélectionner un type de produit avant de choisir une ville."
      );
    }
  };

  // Fonction pour gérer la sélection du type de produit
  const handleProductTypeSelection = (selectedProductType) => {
    setProductType(selectedProductType);
  };

  // Fonction pour gérer le clic sur le bouton de localisation
  const handleLocationButtonClick = () => {
    // Redirection vers la page GoogleMap avec la ville actuelle et le type de produit sélectionnés
    router.push(`/GoogleMap?city=PositionActuelle&productType=${productType}`);
  };

  // Liste des villes disponibles
  const cities = ["ParisXVe", "Chaville", "Versailles"];

  // Effet de chargement pour récupérer le type de produit à partir de l'URL
  useEffect(() => {
    const { productType: urlProductType } = router.query;
    if (urlProductType) {
      setProductType(urlProductType);
    }
  }, [router.query.productType]);

  // Affichage du composant
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <div className="p-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Sélectionnez votre ville</h1>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Affichage des boutons de sélection de ville */}
          {cities.map((city) => (
            <button
              key={city}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-6 rounded text-lg"
              onClick={() => handleCitySelection(city)}
            >
              {city}
            </button>
          ))}
        </div>
        {/* Bouton pour afficher les magasins autour de la localisation actuelle */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded w-full text-lg"
          onClick={handleLocationButtonClick}
        >
          Autour de moi
        </button>
      </div>
    </div>
  );
};

// Export du composant SelectCityPage
export default SelectCityPage;
