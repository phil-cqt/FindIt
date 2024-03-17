// products/[city].js

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import storesData from '../../data/db.json'; // Importer les données des magasins depuis le fichier JSON

const ProductByCity = () => {
  const router = useRouter();
  const { city } = router.query; // Récupérer le nom de la ville depuis l'URL

  const [stores, setStores] = useState([]); // État pour stocker les magasins

  useEffect(() => {
    if (city) {
      // Filtrer les magasins en fonction de la ville
      const filteredStores = storesData.stores.filter(store => store.city === city);
      setStores(filteredStores);
    }
  }, [city]); // Mettre la ville en dépendance

  return (
    <div>
      <h1>Magasins à {city} :</h1>
      {/* Afficher toutes les informations des magasins */}
      <ul>
        {stores.map(store => (
          <li key={store.name}>
            <p>Nom du magasin : {store.name}</p>
            <p>Adresse : {store.address}</p>
            <p>Type de produit : {store.productType}</p>
            <p>Heures : {store.hours}</p>
            {/* Ajoutez d'autres informations des magasins que vous souhaitez afficher */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductByCity;