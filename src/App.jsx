import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Hero from './components/Hero'


function App() {
 

  return (

    <Layout>
        <Navbar />
        <Hero />
    </Layout>
  
 
  )
}

export default App
