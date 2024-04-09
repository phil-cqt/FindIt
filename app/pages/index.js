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
    <div className="bg-gray-300">
      <h1 className="text-3xl font-bold text-center pt-10">Electronique</h1>
      <div className="flex justify-center m-10">
        <div className="flex justify-between">
          <Link href="/select-city?productType=chargeurs" passHref>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer mr-4 w-64">
              <img
                src="/chargeur.jpg"
                alt="Chargeurs"
                className="object-cover rounded-lg h-48 w-full mb-4"
              />
              <p className="text-lg font-semibold">Chargeurs</p>
            </div>
          </Link>

          <Link href="/select-city?productType=ecouteurs" passHref>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer mr-4 w-64">
              <img
                src="/ecouteurs.jpeg"
                alt="Écouteurs"
                className="object-cover rounded-lg h-48 w-full mb-4"
              />
              <p className="text-lg font-semibold">Écouteurs</p>
            </div>
          </Link>

          <Link href="/select-city?productType=batterie externes" passHref>
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
          <Link href="/select-city?productType=tshirts" passHref>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer mr-4 w-64">
              <img
                src="/t-shirt.jpg"
                alt="T-shirts"
                className="object-cover rounded-lg h-48 w-full mb-4"
              />
              <p className="text-lg font-semibold">T-shirt</p>
            </div>
          </Link>

          <Link href="/select-city?productType=pantalons" passHref>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer mr-4 w-64">
              <img
                src="/pantalon.jpg"
                alt="Pantalon"
                className="object-cover rounded-lg h-48 w-full mb-4"
              />
              <p className="text-lg font-semibold">Pantalon</p>
            </div>
          </Link>

          <Link href="/select-city?productType=chaussures" passHref>
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
          <Link href="/select-city?productType=cosmetiques" passHref>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:bg-gray-100 transition duration-300 cursor-pointer mr-4 w-64">
              <img
                src="/cosmetique.jpg"
                alt="cosmetique"
                className="object-cover rounded-lg h-48 w-full mb-4"
              />
              <p className="text-lg font-semibold">Cosmetique</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
