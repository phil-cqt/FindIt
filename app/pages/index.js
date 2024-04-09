// index.js

import React from "react";
import Link from "next/link";

const Home = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100vh",
    marginTop: "50px",
  };

  const categoryStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const rectangleStyle = {
    width: "375px",
    height: "500px",
    border: "2px solid black",
    margin: "15px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer",
  };

  const textStyle = {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "10px",
    fontSize: "18px",
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Electronique</h1>
      <div className="flex justify-center m-10">
        <div className="flex justify-between">
          <Link href="/select-city?productType=chargeur" passHref>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer mr-4 w-64">
              <img
                src="/chargeur.jpg"
                alt="Chargeurs"
                className="object-cover rounded-lg h-48 w-full mb-4"
              />
              <p className="text-lg font-semibold">Chargeurs</p>
            </div>
          </Link>

          <Link href="/select-city?productType=cable" passHref>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer mr-4 w-64">
              <img
                src="/ecouteurs.jpeg"
                alt="Écouteurs"
                className="object-cover rounded-lg h-48 w-full mb-4"
              />
              <p className="text-lg font-semibold">Écouteurs</p>
            </div>
          </Link>

          <Link href="/select-city?productType=plug" passHref>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer w-64">
              <img
                src="/batterie.jpg"
                alt="Batterie"
                className="object-cover rounded-lg h-48 w-full mb-4"
              />
              <p className="text-lg font-semibold">Batterie</p>
            </div>
          </Link>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center mt-10">Mode</h1>
      <div className="flex justify-center m-10">
        <div className="flex justify-between">
          <Link href="/select-city?productType=chargeur" passHref>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer mr-4 w-64">
              <img
                src="/t-shirt.jpg"
                alt="T-shirt"
                className="object-cover rounded-lg h-48 w-full mb-4"
              />
              <p className="text-lg font-semibold">T-shirt</p>
            </div>
          </Link>

          <Link href="/select-city?productType=cable" passHref>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer mr-4 w-64">
              <img
                src="/pantalon.jpg"
                alt="Pantalon"
                className="object-cover rounded-lg h-48 w-full mb-4"
              />
              <p className="text-lg font-semibold">Pantalon</p>
            </div>
          </Link>

          <Link href="/select-city?productType=plug" passHref>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer w-64">
              <img
                src="/chaussures.webp"
                alt="Chaussures"
                className="object-cover rounded-lg h-48 w-full mb-4"
              />
              <p className="text-lg font-semibold">Chaussures</p>
            </div>
          </Link>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center mt-10">Cosmétique</h1>
      <div className="flex justify-center m-10">
        <div className="flex justify-between">
          <Link href="/select-city?productType=chargeur" passHref>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer mr-4 w-64">
              <img
                src="/crème.jpg"
                alt="Crème"
                className="object-cover rounded-lg h-48 w-full mb-4"
              />
              <p className="text-lg font-semibold">Crème</p>
            </div>
          </Link>

          <Link href="/select-city?productType=cable" passHref>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer mr-4 w-64">
              <img
                src="/rouge.jpg"
                alt="Rouge à lèvres"
                className="object-cover rounded-lg h-48 w-full mb-4"
              />
              <p className="text-lg font-semibold">Rouge à lèvres</p>
            </div>
          </Link>

          <Link href="/select-city?productType=plug" passHref>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer w-64">
              <img
                src="/palette.jpg"
                alt="Palette de maquillage"
                className="object-cover rounded-lg h-48 w-full mb-4"
              />
              <p className="text-lg font-semibold">Palette</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
