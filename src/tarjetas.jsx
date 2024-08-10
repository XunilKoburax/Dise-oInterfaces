export default function Tarjeta(){
    return(
        <card>
      <div className="main-container">
        <div className="img-container">
        <img src="public\\pkm\\1891758-001bulbasaur.png" alt="" />
        </div>
        <div className="content">
          <div className="title">
            <h2>Bulbasaur</h2>
          </div>
          <div className="description">
            <p>Pokemon tipo Hierba y veneno</p>
          </div>
          <div className="price">
            <h3>50 pts</h3>
          </div>
          <div className="add">
            <button>Add</button>
          </div>
        </div>

      </div>
    </card>
    )
}