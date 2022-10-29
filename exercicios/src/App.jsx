//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Bio from './components/Bio'
import Footer from './components/Footer'

function App() {
  return (
  <>
    <Header />
    <Bio frase="eu sou uma bio" />
    <Footer/>
    </>
  )
}

export default App
