// Import du module React depuis 'react'
import React from "react";

// Définition du composant About
const About = () => {
  return (
    // Contenu de la page "A Propos"
    <div className="p-10 text-center bg-gray-300 h-screen">
      {/* Titre principal */}
      <h1 className="text-3xl font-bold mb-8">Bienvenue sur notre page "A Propos"</h1>
      {/* Paragraphe d'introduction */}
      <p className="mb-8">
        Ce site web est le résultat d'un Projet Pluridisciplinaire Encadré (PPE) réalisé par six étudiants de l'ECE en 4ème année.
        Notre objectif principal était de mettre en pratique nos compétences tout en produisant un contenu utile pour les utilisateurs.
      </p>
      {/* Titre de la section "Équipe" */}
      <h2 className="text-xl font-bold mb-4">Équipe :</h2>
      {/* Section affichant les membres de l'équipe */}
      <div className="flex justify-center items-center mb-8">
        {/* Bloc pour chaque membre de l'équipe */}
        <div className="flex flex-col items-center mr-4">
          <img src="/hugo.png" alt="Membre 1" className="w-40 h-40 mb-2 rounded-full" />
          <p className="font-semibold mb-1">Hugo Lafargue</p>
          <p className="text-sm">Majeure SI</p>
        </div>
        {/* Ajouter d'autres blocs pour chaque membre de l'équipe de la même manière */}
      </div>
      {/* Paragraphe suivant */}
      <p className="mb-8">
        Nous sommes fiers d'avoir réussi à concrétiser ce projet qui nous a permis de mettre en valeur nos compétences tout en produisant un contenu utile pour nos utilisateurs.
      </p>
      {/* Autres paragraphes */}
      <p className="mb-8">
        Ce projet nous a également permis d'apprendre de nouvelles technologies et de développer nos compétences en matière de développement web.
      </p>
      <p className="mb-8">
        Nous tenons à remercier tous ceux qui ont contribué de près ou de loin à la réalisation de ce projet, ainsi que nos encadrants pédagogiques pour leur soutien et leurs précieux conseils tout au long de ce parcours.
      </p>
      {/* Dernier paragraphe */}
      <p>
        Nous espérons que notre site répondra à vos attentes et vous sera utile dans votre quotidien. N'hésitez pas à explorer nos fonctionnalités et à nous faire part de vos retours !
      </p>
    </div>
  );
};

// Export du composant About
export default About;
