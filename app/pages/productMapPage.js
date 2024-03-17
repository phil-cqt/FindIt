import React from 'react';

const ProductSearchPage = ({ productType }) => {
  const cities = ['Chaville', 'Marseille', 'Lyon', 'Toulouse', 'Nice']; // Exemple de villes

  return (
    <div>
      <h1>Où cherchez-vous {productType}?</h1>
      <div>
        {productType === 'chargeur' ? (
          <img src="/chargeur.jpg" alt="Chargeur" style={{ width: '200px', height: '200px' }} />
        ) : productType === 'cables' ? (
          <img src="/UsbC.jpg" alt="Câbles" style={{ width: '200px', height: '200px' }} />
        ) : (
          <img src="/plug.jpg" alt="Blocs de connection" style={{ width: '200px', height: '200px' }} />
        )}
      </div>
      <p>Nous nous occupons des villes de :</p>
      <ul>
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSearchPage;
