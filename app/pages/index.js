// index.js

import React from 'react';
import Link from 'next/link';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100vh',
    marginTop: '50px',
  };

  const categoryStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const rectangleStyle = {
    width: '375px',
    height: '500px',
    border: '2px solid black',
    margin: '15px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    cursor: 'pointer',
  };

  const textStyle = {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '18px',
  };

  return (
    <div className="flex justify-center m-10 h-screen">
      <div className="flex justify-between">
        <Link href="/select-city?productType=chargeur" passHref>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer mr-4 w-64">
            <img src="/chargeur.jpg" alt="Chargeurs" className="object-cover rounded-lg h-48 w-full mb-4" />
            <p className="text-lg font-semibold">Chargeurs</p>
          </div>
        </Link>
        
        <Link href="/select-city?productType=cable" passHref>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer mr-4 w-64">
            <img src="/UsbC.jpg" alt="Câbles" className="object-cover rounded-lg h-48 w-full mb-4" />
            <p className="text-lg font-semibold">Câbles</p>
          </div>
        </Link>

        <Link href="/select-city?productType=plug" passHref>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer w-64">
            <img src="/plug.jpg" alt="Blocs de connection" className="object-cover rounded-lg h-48 w-full mb-4" />
            <p className="text-lg font-semibold">Blocs de connection</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
