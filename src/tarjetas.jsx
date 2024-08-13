export default function Tarjeta(props){
  console.log(props)

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
            <button>Add</button>
          </div>
        </div>

      </div>
    </card>
    )
}