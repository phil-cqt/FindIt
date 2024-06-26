import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link"; // Importer Link depuis next/link
import storesData from "../../data/db.json"; // Importer les données des magasins depuis le fichier JSON

const ProductByCity = () => {
  const router = useRouter();
  const { city } = router.query; // Récupérer le nom de la ville depuis l'URL
  const { productType } = router.query; // Récupérer le type de produit depuis l'URL

  const [stores, setStores] = useState([]); // État pour stocker les magasins

  useEffect(() => {
    // Utiliser un effet pour filtrer les magasins lorsque la ville ou le type de produit changent
    if (city && productType) {
      // Filtrer les magasins en fonction de la ville et du type de produit
      const filteredStores = storesData.stores.filter(
        (store) => store.city === city && store.productType === productType
      );
      setStores(filteredStores);
    }
  }, [city, productType]); // Mettre la ville et le type de produit en dépendance

  return (
    <div className="bg-gray-300 p-4 min-h-screen">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md relative">
        {/* Afficher le titre avec le nom de la ville et le type de produit */}
        <h1 className="text-2xl font-bold mb-4">
          Magasins à {city} vendant des {productType} :
        </h1>
        {/* affichage de la liste des magasins avec leurs caractéristiques*/}
        <ul>
          {stores.map((store) => (
            <li key={store.name} className="mb-4">
              <p className="text-lg font-semibold">
                Nom du magasin : {store.name}
              </p>
              <p className="text-gray-700">Adresse : {store.address}</p>
              <p className="text-gray-700">
                Type de produit : {store.productType}
              </p>
              <p className="text-gray-700">Heures : {store.hours}</p>
            </li>
          ))}
        </ul>

        {/* Ajout d'un lien vers la page de la carte avec le bouton "Afficher sur la carte" */}
        <Link
          href={`/GoogleMap?city=${city}&productType=${productType}`}
          passHref
        >
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 absolute top-4 right-4">
            Afficher sur la carte
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductByCity;
