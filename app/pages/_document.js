// Import des composants Html, Head, Main et NextScript depuis 'next/document'
import { Html, Head, Main, NextScript } from 'next/document'

// Définition du composant Document
export default function Document() {
  // Retourne la structure de base du document HTML
  return (
    <Html>
      {/* Composant Head pour gérer les métadonnées et les balises de style */}
      <Head />
      <body>
        {/* Composant Main pour afficher le contenu principal de l'application */}
        <Main />
        {/* Composant NextScript pour inclure les scripts nécessaires à Next.js */}
        <NextScript />
      </body>
    </Html>
  )
}
