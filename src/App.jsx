import { useState } from 'react'
import { useEffect } from 'react'
import Header from './encabezado'
import Tarjeta from './tarjetas'
import {db} from './data/pkm.js'
import './App.css'



function App() {
  //declaracion de estados
  const [pokemons, setPokemon] = useState([]) // los hooks se debe de colocar
  // siempre antes del return para que se tenga control de lo que se esta declarando
  const [total, setTotal] = useState(0)
  // de igual modo nunca se debe declarar dentro de condicionales pues puede generar problemas
  const [carrito, setCarrito] = useState([])
  useEffect(()=>{
    setPokemon(db)
    console.log("setEffect")
  }, []
)

  return (
    <>
    <Header></Header>
    <div className="Gallery"> 
        {pokemons.map ((pokemon) =>(
          <Tarjeta 
            key = {pokemon.id}
            pokemon = {pokemon}
            carrito = {carrito}
            setCarrito = {setCarrito} //funcion de carrito
            
          />
        ))}
        
        
    </div> 
    </>
  )
}

export default App
