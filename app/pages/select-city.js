import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const SelectCityPage = () => {
  const router = useRouter();
  const [productType, setProductType] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null); // State to store current location

  const handleCitySelection = (city) => {
    if (productType !== "") {
      console.log(
        `Ville sélectionnée : ${city}, Type de produit : ${productType}`
      );
      router.push(`/products/${city}?productType=${productType}`);
    } else {
      console.error(
        "Veuillez sélectionner un type de produit avant de choisir une ville."
      );
    }
  };

  const handleProductTypeSelection = (selectedProductType) => {
    setProductType(selectedProductType);
  };

  const handleLocationButtonClick = () => {
    router.push(`/GoogleMap?city=PositionActuelle&productType=${productType}`);
  };

  const cities = ["ParisXVe", "Chaville", "Versailles"];

  useEffect(() => {
    const { productType: urlProductType } = router.query;
    if (urlProductType) {
      setProductType(urlProductType);
    }
  }, [router.query.productType]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Sélectionnez votre ville</h1>
        <div className="grid grid-cols-3 gap-4 mb-6">
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

export default SelectCityPage;
