import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Importer useRouter depuis next/router

const SelectCityPage = () => {
  const router = useRouter(); // Initialiser useRouter

  const [productType, setProductType] = useState(""); // État pour stocker le type de produit sélectionné

  const handleCitySelection = (city) => {
    if (productType !== "") {
      console.log(`Ville sélectionnée : ${city}, Type de produit : ${productType}`);
      router.push(`/products/${city}?productType=${productType}`);
    } else {
      console.error("Veuillez sélectionner un type de produit avant de choisir une ville.");
      // Gérer le cas où aucun type de produit n'a été sélectionné
    }
  };

  const handleProductTypeSelection = (selectedProductType) => {
    setProductType(selectedProductType); // Mettre à jour le type de produit sélectionné
  };

  const cities = ['Chaville', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Paris'];

  // Utiliser useEffect pour extraire le type de produit de l'URL lorsqu'il change
  useEffect(() => {
    const { productType: urlProductType } = router.query;
    if (urlProductType) {
      setProductType(urlProductType);
    }
  }, [router.query.productType]);

  return (
    <div>
      <h1>Sélectionnez votre ville</h1>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <button onClick={() => handleCitySelection(city)}>{city}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectCityPage;
