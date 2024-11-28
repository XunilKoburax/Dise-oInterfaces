import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const AppContext = createContext();

function AppProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);

  const {
    item: equipo,
    saveItem: guardarEquipo,
    loading,
    error,
  } = useLocalStorage("Listaequipo", []);

  const {
    item: listaPokemon,
    saveItem: guardarPokemon,
    loading: pokemonLoading,
    error: pokemonError,
  } = useLocalStorage("Galeria", []);

  const addteam = (pokemon) => {
    if (equipo.length >= 6) {
      alert("Ya no se puede agregar :(");
      return;
    }
    if (equipo.find((p) => p.id === pokemon.id)) {
      alert("Este Pokémon ya está en el equipo.");
      return;
    }

    const nuevoEquipo = [...equipo, pokemon];
    guardarEquipo(nuevoEquipo);
  };

  const removeTeam = (pokemonId) => {
    const nuevoEquipo = equipo.filter((pokemon) => pokemon.id !== pokemonId);
    guardarEquipo(nuevoEquipo);
  };

  return (
    <AppContext.Provider
      value={{
        removeTeam,
        addteam,
        equipo,
        total,
        setTotal,
        carrito,
        setCarrito,
        pokemonError,
        pokemonLoading,
        loading,
        error,
        listaPokemon,
        guardarPokemon,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
