import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import storesData from '../data/db.json'; // Import store data from JSON file
import dotenv from 'dotenv'; // Import dotenv package

dotenv.config(); // Load variables from .env file

const GoogleMapPage = () => {
  const router = useRouter();
  const { city, productType } = router.query;

  const [stores, setStores] = useState([]);
  const [map, setMap] = useState(null); // State to store the map object

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    //mettez directement votre clé d'API ici sinon il y aura des problemes d'affichage de la carte google maps, ne la mettez pas dans un fichier.env
    googleMapsApiKey: dotenv.GOOGLE_MAPS_API_KEY, // Utilisation de la clé d'API depuis .env
  });

  useEffect(() => {
    if (isLoaded) {
      if (city === 'PositionActuelle') {
        navigator.geolocation.getCurrentPosition(
          position => {
            const center = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            setMap(new google.maps.Map(document.getElementById("map"), {
              center: center,
              zoom: 15,
            }));

            // Load stores for current position
            setStores(storesData.stores.filter(store => store.productType === productType));
          },
          error => {
            console.error('Error getting current position:', error);
            // If geolocation fails, fallback to default center
            setMap(new google.maps.Map(document.getElementById("map"), {
              center: { lat: 0, lng: 0 },
              zoom: 15,
            }));
          }
        );
      } else{
        // Otherwise, center the map based on the selected 
        const filteredStores = storesData.stores.filter(store => store.city === city && store.productType === productType);
        
        if (filteredStores.length > 0) {
          const center = {
            lat: filteredStores[0].latitude,
            lng: filteredStores[0].longitude,
          }
          setMap(new google.maps.Map(document.getElementById("map"), {
            center: center,
            zoom: 15,
          }));

          // Load stores for selected city
          setStores(filteredStores);
        }
        else {
          setMap(new google.maps.Map(document.getElementById("map"), {
            center: { lat: 0, lng: 0 },
            zoom: 15,
          }));
        }
      }
    }
  }, [isLoaded, city, productType]);

  useEffect(() => {
    if (isLoaded && map) {
      stores.forEach(store => {
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

  return (
    <div>
      {isLoaded ? (
        <div id="map" style={{ width: '100%', height: '100vh' }}></div>
      ) : (
        <p>Loading Map...</p>
      )}
    </div>
  );
};

export default GoogleMapPage;
