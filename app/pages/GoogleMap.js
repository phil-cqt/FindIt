// Import des modules React et autres dépendances nécessaires
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import storesData from '../data/db.json'; // Import des données des magasins depuis un fichier JSON
import dotenv from 'dotenv'; // Import du package dotenv pour charger les variables d'environnement

// Chargement des variables d'environnement depuis le fichier .env
dotenv.config();

// Définition du composant GoogleMapPage
const GoogleMapPage = () => {
  // Récupération de l'objet router de Next.js
  const router = useRouter();
  const { city, productType } = router.query; // Extraction des paramètres de l'URL

  // Déclaration des états pour stocker les données des magasins et la carte
  const [stores, setStores] = useState([]);
  const [map, setMap] = useState(null); // État pour stocker l'objet carte

  // Chargement du script Google Maps API avec le hook useJsApiLoader
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // Utilisation de la clé d'API Google Maps depuis .env
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY, // Utilisation de la clé d'API depuis .env
  });

  // Effet pour charger la carte et les magasins lorsque la page est chargée
  useEffect(() => {
    if (isLoaded) {
      if (city === 'PositionActuelle') {
        // Si la ville est "PositionActuelle", récupérer la position actuelle de l'utilisateur
        navigator.geolocation.getCurrentPosition(
          position => {
            const center = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            // Création de la carte avec le centre sur la position actuelle de l'utilisateur
            setMap(new google.maps.Map(document.getElementById("map"), {
              center: center,
              zoom: 15,
            }));

            // Chargement des magasins pour la position actuelle
            setStores(storesData.stores.filter(store => store.productType === productType));
          },
          error => {
            console.error('Error getting current position:', error);
            // Si la géolocalisation échoue, centrer la carte sur la position par défaut
            setMap(new google.maps.Map(document.getElementById("map"), {
              center: { lat: 0, lng: 0 },
              zoom: 15,
            }));
          }
        );
      } else {
        // Sinon, centrer la carte sur la ville sélectionnée
        const filteredStores = storesData.stores.filter(store => store.city === city && store.productType === productType);
        
        if (filteredStores.length > 0) {
          const center = {
            lat: filteredStores[0].latitude,
            lng: filteredStores[0].longitude,
          }
          // Création de la carte avec le centre sur la première position de la ville sélectionnée
          setMap(new google.maps.Map(document.getElementById("map"), {
            center: center,
            zoom: 15,
          }));

          // Chargement des magasins pour la ville sélectionnée
          setStores(filteredStores);
        }
        else {
          // Si aucun magasin n'est trouvé pour la ville sélectionnée, centrer la carte sur la position par défaut
          setMap(new google.maps.Map(document.getElementById("map"), {
            center: { lat: 0, lng: 0 },
            zoom: 15,
          }));
        }
      }
    }
  }, [isLoaded, city, productType]);

  // Effet pour ajouter les marqueurs des magasins sur la carte lorsque la page est chargée
  useEffect(() => {
    if (isLoaded && map) {
      stores.forEach(store => {
        // Ajout d'un marqueur pour chaque magasin sur la carte
        new google.maps.Marker({
          position: { lat: store.latitude, lng: store.longitude },
          map: map,
          title: store.name,
          label: {
            text: store.name,
            color: 'black',
            fontWeight: 'bold',
            fontSize: '12px',
            anchor: new google.maps.Point(0, -30),
          },
        });
      });
    }
  }, [isLoaded, map, stores]);

  // Rendu de la page
  return (
    <div>
      {isLoaded ? ( // Affichage de la carte si elle est chargée
        <div id="map" style={{ width: '100%', height: '100vh' }}></div>
      ) : (
        <p>Loading Map...</p> // Message de chargement si la carte est en cours de chargement
      )}
    </div>
  );
};

// Export du composant GoogleMapPage
export default GoogleMapPage;
