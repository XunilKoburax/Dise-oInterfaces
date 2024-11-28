import React, { useContext } from "react";
import { AppContext } from "./context";

export default function Tarjeta({ pokemon }) {
  // Obtén `addteam` desde el contexto
  const { addteam } = useContext(AppContext);

  const { id, name, img, type, Costo } = pokemon;

  return (
    <card>
      <div className="main-container">
        <div className="img-container">
          <img src={img} alt={`Imagen de ${name}`} />
        </div>
        <div className="content">
          <div className="title">
            <h2>{name}</h2>
          </div>
          <div className="description">
            <p>Pokemon tipo:</p>
            <ul>
              {type.map((tipo, index) => (
                <li key={index}>{tipo}</li>
              ))}
            </ul>
          </div>
          <div className="price">
            <h3>{Costo} pts</h3>
          </div>
          <div className="add">
            <button type="button" onClick={() => addteam(pokemon)}>
              Add
            </button>
          </div>
        </div>
      </div>
    </card>
  );
}
