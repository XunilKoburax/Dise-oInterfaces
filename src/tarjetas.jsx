export default function Tarjeta(props){
  console.log(props)

  const handleClick =(id)=>{
    console.log("diste click...",id)
  }

    return(
        <card>
      <div className="main-container">
        <div className="img-container">
        <img src={props.img} alt="" />
        </div>
        <div className="content">
          <div className="title">
            <h2>{props.name}</h2>
          </div>
          <div className="description">
            <p>Pokemon tipo:</p>
            <ul>
              {props.tipo.map((tipo) => (
                
                <li>{tipo}</li>
              ))}
            </ul>
          </div>
          <div className="price">
            <h3>{props.Costo} pts</h3>
          </div>
          <div className="add">
            <button
              type="button"
              onClick={()=>handleClick(props.id)}
            >Add</button>
          </div>
        </div>

      </div>
    </card>
    )
}