import { useContext } from "react";
import { AppContext } from "./context";

function Team() {
  const { removeTeam, equipo } = useContext(AppContext); // Acceso al contexto

  return (
    <div className="team-container">
      <div className="Gallery">
      {equipo.length === 0 ? (
        <h2>No hay Pokemon en el equipo.</h2>
      ) : (
        
        equipo.map((pokemon) => (
          <card>
          
                

          <div className="main-container" key={pokemon.id}>
            <div className="img-container">
              <img src={pokemon.img} alt={`Imagen de ${pokemon.name}`} />
            </div>
            <div className="content">
              <div className="title">
                <h2>{pokemon.name}</h2>
              </div>
              <div className="description">
                <p>Pokemon tipo:</p>
                <ul>
                  {pokemon.type.map((tipo, index) => (
                    <li key={index}>{tipo}</li>
                  ))}
                </ul>
              </div>
              <div className="price">
                <h3>{pokemon.Costo} pts</h3>
              </div>
              <div className="add">
                <button
                  type="button"
                  onClick={() => removeTeam(pokemon.id)}
                >
                  Remove
                </button>
              </div>
            </div>
            </div>
            
          </card>
        ))
      )}
    </div>
    </div>
  );
}

export { Team };
