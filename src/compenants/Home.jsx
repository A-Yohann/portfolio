import React, { memo } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import banane from "../assets/dev.jpg"

export default memo(function Home() {
  return (
    <div className='container-fluid px-0'>
      <img className='img-fluid w-100' src={banane} alt='image de developpeur web'/>
      
    </div>
  )
})
