import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './compenants/header';
import Footer from './compenants/footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header/> */}
        <Footer/>
    </>
  )
}

export default App
