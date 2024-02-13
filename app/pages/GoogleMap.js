import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const GoogleMapPage = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  const containerStyle = {
    width: '100%', // Set to 100% for full screen
    height: '100vh', // Set to 100vh for full screen height
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCbvmgC5mB4AgHDE8jcahzx2ISJ_EmNurc',
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  }, []);

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    if (currentLocation) {
      map.panTo(currentLocation);
    }
    setMap(map);
  }, [currentLocation]);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentLocation || { lat: 0, lng: 0 }} // Default to (0, 0) if current location is not available
          zoom={15} // You can adjust the zoom level as needed
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      ) : (
        <p>Loading Map...</p>
      )}
    </div>
  );
};

export default GoogleMapPage;
