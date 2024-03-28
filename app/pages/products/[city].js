// products/[city].js

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; // Importer Link depuis next/link
import storesData from '../../data/db.json'; // Importer les données des magasins depuis le fichier JSON

const ProductByCity = () => {
  const router = useRouter();
  const { city } = router.query; // Récupérer le nom de la ville depuis l'URL
  const { productType } = router.query; // Récupérer le type de produit depuis l'URL

  const [stores, setStores] = useState([]); // État pour stocker les magasins

  useEffect(() => {
    if (city && productType) {
      // Filtrer les magasins en fonction de la ville et du type de produit
      const filteredStores = storesData.stores.filter(store => store.city === city && store.productType === productType);
      setStores(filteredStores);
    }
  }, [city, productType]); // Mettre la ville et le type de produit en dépendance

  return (
    <div>
      <h1>Magasins à {city} vendant des {productType} :</h1>
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

      {/* Ajouter le lien vers la page de la carte avec le bouton "Afficher sur la carte" */}
      <Link href={`/GoogleMap?city=${city}&productType=${productType}`} passHref>
        <button>Afficher sur la carte</button>
      </Link>
    </div>
  );
};

export default ProductByCity;
