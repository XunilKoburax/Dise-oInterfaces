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
    
    </>
  )
}

export default App
