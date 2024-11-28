import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from './encabezado'
import Tarjeta from './tarjetas'
import { useLocalStorage } from './context/useLocalStorage.jsx'
import {db} from './data/pkm.js'
import './App.css'
import {Team} from './tarjetasteam.jsx'
import { AppProvider } from './context/index.jsx'


function App() {

  
  
  return (
    <>
      <Header></Header>
      <AppProvider>
                    <Team/>
            <div>
            <div className="Gallery">

        {db.map((pokemon) => (
          <Tarjeta key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>    
      </div>    


      </AppProvider>
    </>
  )
}

export default App
