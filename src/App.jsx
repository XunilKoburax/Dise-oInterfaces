import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
     <header>
        <nav>
          <h1>Coffie code</h1>
        <ul id="barnav" class="nav">
            <li><a href='#'>Tienda en linea</a></li>
            <li>|</li>
            <li><a href="#">Código ejemplo</a></li>
            <li>|</li>
            <li><a href="#">Plantillas</a></li>
            <li>|</li>
            <li class="cart-container">
              <a href="#"><img src=".\\public\\car_white.png" alt="" height="30px" /></a>
              <div class="cart-dropdown">
                <p>Carrito vacío</p>
                <div className="deailtcard">
                  <div className="name">Bulbasaur</div>
                  <div className="points">50 pts</div>
                  <div className="count">1</div>
                  <div className="total">50 pts</div>
                </div>
              </div>
            </li>
           
        </ul>
        </nav>
    </header>
    <div class="Gallery"> 
    <card>
      <div class="main-container">
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
    <card>
      <div class="main-container">
        <div className="img-container">
        <img src="public\\pkm\\1891759-002ivysaur.png" alt="" />
        </div>
        <div className="content">
          <div className="title">
            <h2>Ivysaur</h2>
          </div>
          <div className="description">
            <p>Pokemon tipo Hierba y veneno</p>
          </div>
          <div className="price">
            <h3>60 pts</h3>
          </div>
          <div className="add">
            <button>Add</button>
          </div>
        </div>

      </div>
    </card>
    <card>
      <div class="main-container">
        <div className="img-container">
        <img src="public\\pkm\\1891760-003venusaur.png" alt="" />
        </div>
        <div className="content">
          <div className="title">
            <h2>Venusaur</h2>
          </div>
          <div className="description">
            <p>Pokemon tipo Hierba y veneno</p>
          </div>
          <div className="price">
            <h3>70 pts</h3>
          </div>
          <div className="add">
            <button>Add</button>
          </div>
        </div>

      </div>
    </card>
    </div> 
    </>
  )
}

export default App
