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
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // useEffect para ocultar el modal después de 2 segundos
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const handleAdd = (pokemon) => {
    setSelectedPokemon(pokemon); // Asigna el Pokémon seleccionado
    setShowModal(true); // Muestra el modal
  };

  return (
    <>
      <Header />
      <AppProvider>
        <Team />
        <div className="Gallery">
          {db.map((pokemon) => (
            <Tarjeta
              key={pokemon.id}
              pokemon={pokemon}
              handleAdd={handleAdd}
            />
          ))}
        </div>
      </AppProvider>

      {/* Modal */}
      {showModal && selectedPokemon && (
        <div className="modal">
          <div className="modal-content">
            <img src={selectedPokemon.img} alt={selectedPokemon.name} className="modal-image" />
            <h3>{selectedPokemon.name} agregado al carrito</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
