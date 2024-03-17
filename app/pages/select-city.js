// select-city.js

import React from 'react';
import { useRouter } from 'next/router'; // Importer useRouter depuis next/router

const SelectCityPage = () => {
  const router = useRouter(); // Initialiser useRouter

  const handleCitySelection = (city) => {
    console.log(`Ville sélectionnée : ${city}`);
    router.push(`/products/${city}?productType=chargeur`);
};

  const cities = ['Chaville', 'Marseille', 'Lyon', 'Toulouse', 'Nice'];

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
