import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './compenants/header';
import Footer from './compenants/footer';
import Home from './compenants/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header/>
       <Home/> 
        <Footer/>
        
    </>
  )
}

export default App
