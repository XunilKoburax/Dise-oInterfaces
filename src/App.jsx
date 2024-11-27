import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from './encabezado'
import Tarjeta from './tarjetas'
import { useLocalStorage } from './useLocalStorage'
import {db} from './data/pkm.js'
import './App.css'
import Team from './tarjetasteam.jsx'


function App() {
  const [total, setTotal] = useState(0)
  // de igual modo nunca se debe declarar dentro de condicionales pues puede generar problemas
  const [carrito, setCarrito] = useState([])
  
  const {  // prepraracion de objeto localstorage
    item: equipo, // valor iterable creado para almacenar los valores a localstorage y reutilizable el los componentes
    saveItem: guardarEquipo, // set estate del anterior
    loading, //estado de carga
    error //estado de error en caso de una falla al solicitar los datos
  } = useLocalStorage("Listaequipo",[]) //envio de parametros iniciales, etiqueta y array

  const {
    item: listaPokemon,
    saveItem: guardarPokemon,
    loading: pokemonLoading,
    error: pokemonError,
  } = useLocalStorage("Galeria", db); // lo mismo pero para el consumo del API

  const pokemons = listaPokemon; //Carga inicial del objeto devuelto por useEffect

  const addteam = (pokemon) => { //condiones del equipo
    if (equipo.length >= 6) {
      let message = "Ya no se puede agregar :(";
      return ;
    }

    if (equipo.find((p) => p.id === pokemon.id)) {
      let  message = ("Este Pokémon ya está en el equipo.");
      return ;
    }

    const nuevoEquipo = [...equipo, pokemon];
    guardarEquipo(nuevoEquipo); // Guardar en localStorage
  };

  const removeTeam = (pokemonId) => {
    const nuevoEquipo = equipo.filter((pokemon) => pokemon.id !== pokemonId);
    guardarEquipo(nuevoEquipo); // Actualizar el estado y localStorage
    console.log("Eliminando ..")
  };
  
  return (
    <>
    <Header></Header>
    <h1>Equipo Pokemon</h1>
        {loading && <p>Cargando ...</p>} 
        {error && <p>Se ha producido un error.</p>}
        {(!loading && equipo.length===0) && <h2>Selecciona a tu equipo :)</h2> }
        <div className="Gallery">
        
        {equipo.map((pokemon) => (
          <Team
            key={pokemon.id}
            pokemon={pokemon}
            carrito={carrito}
            setCarrito={setCarrito}
            eliminarDelEquipo={removeTeam} // Pasa la función como prop
          />
        ))}
      </div>

    
    <h1>Disponibles </h1>
    {pokemonLoading && <p>Cargando Pokémon...</p>} 
    {pokemonError && <p>Error al cargar Pokémon</p>}
    <div className="Gallery">
        
        {pokemons.map((pokemon) => (
          <Tarjeta
            key={pokemon.id}
            pokemon={pokemon}
            carrito={carrito}
            setCarrito={setCarrito}
            agregarAlEquipo={addteam} // Pasa la función como prop

          />
        ))}
      </div>
    </>
  )
}

export default App
