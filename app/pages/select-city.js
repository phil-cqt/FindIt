import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const SelectCityPage = () => {
  const router = useRouter();
  const [productType, setProductType] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null); // State to store current location

  const handleCitySelection = (city) => {
    if (productType !== "") {
      console.log(`Ville sélectionnée : ${city}, Type de produit : ${productType}`);
      router.push(`/products/${city}?productType=${productType}`);
    } else {
      console.error("Veuillez sélectionner un type de produit avant de choisir une ville.");
    }
  };

  const handleProductTypeSelection = (selectedProductType) => {
    setProductType(selectedProductType);
  };

  const handleLocationButtonClick = () => {
    router.push(`/GoogleMap?city=PositionActuelle&productType=${productType}`)    
  };

  const cities = ['Chaville', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Paris'];

  useEffect(() => {
    const { productType: urlProductType } = router.query;
    if (urlProductType) {
      setProductType(urlProductType);
    }
  }, [router.query.productType]);

  return (
    <div>
      <h1>Sélectionnez votre ville</h1>
      <button onClick={handleLocationButtonClick}>Autour de moi</button>
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
