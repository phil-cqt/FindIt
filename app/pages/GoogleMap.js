import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import storesData from '../data/db.json'; // Importer les données des magasins depuis le fichier JSON

const GoogleMapPage = () => {
  const router = useRouter();
  const { city } = router.query; // Récupérer le nom de la ville depuis l'URL
  const { productType } = router.query; // Récupérer le type de produit depuis l'URL

  const [stores, setStores] = useState([]); // État pour stocker les magasins correspondants à la ville et au type de produit

  useEffect(() => {
    if (city && productType) {
      // Filtrer les magasins en fonction de la ville et du type de produit
      const filteredStores = storesData.stores.filter(store => store.city === city && store.productType === productType);
      setStores(filteredStores);
    }
  }, [city, productType]); // Mettre la ville et le type de produit en dépendance

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCbvmgC5mB4AgHDE8jcahzx2ISJ_EmNurc', // Remplacez par votre clé API Google Maps
  });

  const containerStyle = {
    width: '100%',
    height: '100vh',
  };

  const center = {
    lat: 0, // Définir la latitude par défaut à 0
    lng: 0, // Définir la longitude par défaut à 0
  };

  // Calculer le centre de la carte en fonction de la ville sélectionnée
  if (stores.length > 0) {
    const cityCoordinates = stores[0].latitude; // Récupérer la latitude de la première occurrence de la ville dans les magasins
    const cityLongitude = stores[0].longitude; // Récupérer la longitude de la première occurrence de la ville dans les magasins
    center.lat = cityCoordinates; // Définir la latitude du centre de la carte
    center.lng = cityLongitude; // Définir la longitude du centre de la carte
  }

  useEffect(() => {
    if (isLoaded) {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 15,
      });

      // Ajouter un marqueur personnalisé pour chaque magasin
      stores.forEach(store => {
        new google.maps.Marker({
          position: new google.maps.LatLng(store.latitude, store.longitude),
          map: map,
          title: store.name,
          label: {
            text: store.name,
            color: 'black',
            fontWeight: 'bold',
            fontSize: '12px',
            anchor: new google.maps.Point(0, -30), // Déplacer le label vers le haut
          },
        });
      });
    }
  }, [isLoaded, stores]); // Mettre isLoaded et stores en dépendance

  return (
    <div>
      {isLoaded ? (
        <div id="map" style={containerStyle}></div>
      ) : (
        <p>Loading Map...</p>
      )}
    </div>
  );
};

export default GoogleMapPage;
