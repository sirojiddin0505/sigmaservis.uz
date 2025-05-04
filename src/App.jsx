import { useState } from 'react'
import './App.css'
import Nav from './components/navbar/navbar'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Main from './components/main/main'
import Section from './components/section/section'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'


function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <Hero/>
    <Main/>
    <Section/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
