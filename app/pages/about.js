import React from "react";

const About = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-8">Bienvenue sur notre page "About"</h1>
      <p className="mb-8">
        Ce site web est le résultat d'un Projet Pluridisciplinaire Encadré (PPE) réalisé par six étudiants de l'ECE en 4ème année.
        Notre objectif principal était de mettre en pratique nos compétences tout en produisant un contenu utile pour les utilisateurs.
      </p>
      <h2 className="text-xl font-bold mb-4">Équipe :</h2>
      <div className="flex justify-center items-center mb-8">
        {/* Insérer les photos des membres de l'équipe */}
        <div className="flex flex-col items-center mr-4">
          <img src="/hugo.png" alt="Membre 1" className="w-40 h-40 mb-2 rounded-full" />
          <p className="font-semibold mb-1">Hugo Lafargue</p>
          <p className="text-sm">Majeure SI</p>
        </div>
        <div className="flex flex-col items-center mr-4">
          <img src="/karim.png" alt="Membre 2" className="w-40 h-40 mb-2 rounded-full" />
          <p className="font-semibold mb-1">Karim-Joseph Jabr</p>
          <p className="text-sm">Majeure Finance</p>
        </div>
        <div className="flex flex-col items-center mr-4">
          <img src="/robin.png" alt="Membre 2" className="w-40 h-40 mb-2 rounded-full" />
          <p className="font-semibold mb-1">Paul Morgant</p>
          <p className="text-sm">Majeure Finance</p>
        </div>
        <div className="flex flex-col items-center mr-4">
          <img src="/philemon.png" alt="Membre 2" className="w-40 h-40 mb-2 rounded-full" />
          <p className="font-semibold mb-1">Philémon Coquet</p>
          <p className="text-sm">Majeure SI</p>
        </div>
        <div className="flex flex-col items-center mr-4">
          <img src="/robin.png" alt="Membre 2" className="w-40 h-40 mb-2 rounded-full" />
          <p className="font-semibold mb-1">Raphaël Pauly</p>
          <p className="text-sm">Majeure SI</p>
        </div>
        <div className="flex flex-col items-center mr-4">
          <img src="/robin.png" alt="Membre 2" className="w-40 h-40 mb-2 rounded-full" />
          <p className="font-semibold mb-1">Robin Privat</p>
          <p className="text-sm">Majeure SI</p>
        </div>
      </div>
      <p className="mb-8">
        Nous sommes fiers d'avoir réussi à concrétiser ce projet qui nous a permis de mettre en valeur nos compétences tout en produisant un contenu utile pour nos utilisateurs.
      </p>
      <p className="mb-8">
        Ce projet nous a également permis d'apprendre de nouvelles technologies et de développer nos compétences en matière de développement web.
      </p>
      <p className="mb-8">
        Nous tenons à remercier tous ceux qui ont contribué de près ou de loin à la réalisation de ce projet, ainsi que nos encadrants pédagogiques pour leur soutien et leurs précieux conseils tout au long de ce parcours.
      </p>
      <p>
        Nous espérons que notre site répondra à vos attentes et vous sera utile dans votre quotidien. N'hésitez pas à explorer nos fonctionnalités et à nous faire part de vos retours !
      </p>
    </div>
  );
};

export default About;
