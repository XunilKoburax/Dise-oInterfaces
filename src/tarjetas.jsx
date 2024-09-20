export default function Tarjeta({pokemon, carrito,setCarrito}){
  
  const {id, name, img,type, Costo} = pokemon
  console.log(id)

  const handleClick =(datos)=>{
    //se envia la informacion de la guitarra a nuestro objeto
    setCarrito([...carrito,datos])
    
  }

    return(
        <card>
      <div className="main-container">
        <div className="img-container">
        <img src={img} alt="" />
        </div>
        <div className="content">
          <div className="title">
            <h2>{name}</h2>
          </div>
          <div className="description">
            <p>Pokemon tipo:</p>
            <ul>

              {type.map((tipo) => (
               
                <li>{tipo}</li>
              ))}
            </ul>
          </div>
          <div className="price">
            <h3>{Costo} pts</h3>
          </div>
          <div className="add">
            <button
              type="button"
              onClick={()=>handleClick([pokemon])}
            >Add</button>
          </div>
        </div>

      </div>
    </card>
    )
}