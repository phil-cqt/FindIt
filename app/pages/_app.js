// import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
// import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import '@/styles/globals.css'
import { ContextProvider } from '../components/UserContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  // Create a new supabase browser client on every first render.
  return (
      <ContextProvider>
        <Header />  
        <Component {...pageProps}/>
        <Footer />
      </ContextProvider>
  )
}