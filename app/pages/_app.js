// Import des modules React et useState depuis 'react'
import { useState } from 'react'

// Import des styles globaux depuis '@/styles/globals.css'
import '@/styles/globals.css'

// Import du composant ContextProvider depuis '../components/UserContext'
import { ContextProvider } from '../components/UserContext'

// Import des composants Header et Footer depuis '@/components/Header' et '@/components/Footer'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Définition du composant App
export default function App({ Component, pageProps }) {
  // Créer un nouveau client supabase sur chaque premier rendu.
  return (
    // Utilisation du ContextProvider pour fournir un contexte aux composants enfants
    <ContextProvider>
      {/* Affichage du composant Header */}
      <Header />  
      {/* Affichage du composant passé en props (Component) avec ses props (pageProps) */}
      <Component {...pageProps}/>
      {/* Affichage du composant Footer */}
      <Footer />
    </ContextProvider>
  )
}
