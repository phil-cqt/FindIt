import React from 'react';
import Header from '../components/Header';

const Vetements = () => {
  // List of items with their details and image URLs
  const items = [
    { name: 'Jean troué', size: 'S-M-L-XL', price: '$25-$40', imageUrl: '/jean_troue.jpeg' },
    { name: 'T-shirt blanc col V', size: 'S-M-L', price: '$5-$15', imageUrl: 't-shirt-col-v.jpg' },
    { name: 'Short de plage', size: 'S-XL', price: '$20-$30', imageUrl: 'short_de_bain.jpg' },
    { name: 'Casquette Nike', size: 'One Size', price: '$10-15$', imageUrl: 'casquette.jpg' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold m-4 text-center">Vêtements</h1>
      {/* Rendering cards for each item */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image with border */}
            <div className="border border-gray-200">
              <img src={item.imageUrl} alt={item.name} className="w-full h-auto" />
            </div>
            {/* Item details */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600">Size: {item.size}</p>
              <p className="text-gray-600">Price: {item.price}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Other content of the page */}
    </div>
  );
};

export default Vetements;
