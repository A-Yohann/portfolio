import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from './compenants/header';
import Footer from './compenants/footer';
import Home from './compenants/Home';
import Service from '../Pages/Service';
import ContactForm from '../Pages/Contact';
import Mentionlegales from '../Pages/Mentionlegales';
import Portfolio from '../Pages/Portfolio';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Service />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/mention' element={<Mentionlegales />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App