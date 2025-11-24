import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Header from './compenants/header';
import Footer from './compenants/footer';
import Home from './compenants/Home';
import Service from '../Pages/Service';
import ContactForm from '../Pages/Contact';
import Mentionlegales from '../Pages/Mentionlegales';
import Portfolio from '../Pages/Portfolio';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/services' element={<Service />} />
          <Route path='/contact' element={<ContactForm/>} />
          <Route path='/mention' element={<Mentionlegales/>} />
          <Route path='/portfolio' element={<Portfolio/>} />

        </Routes>
       
      <Footer/>
        
        
    </>
  )
}

export default App
