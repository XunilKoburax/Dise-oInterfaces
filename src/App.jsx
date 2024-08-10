import { useState } from 'react'
import Header from './encabezado'
import Tarjeta from './tarjetas'

import './App.css'

function App() {

  return (
    <>
     <Header></Header>
    <div className="Gallery"> 
        <Tarjeta></Tarjeta>
    </div> 
    </>
  )
}

export default App
