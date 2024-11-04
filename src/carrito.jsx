function Carrito(){

    return(
        <li className="cart-container">
              <a href="#"><img src=".\\public\\car_white.png" alt="" height="30px" /></a>
              <div className="cart-dropdown">
                <div className="deailtcard">
                    <table>
                        <tr>
                            <th>Cantidad</th>
                            <th>Articulo</th>
                            <th>Costo</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bulbasaur</td>
                            <td> 50 pts</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><b>Total</b></td>
                            <td> 50 pts</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td> <button>Vaciar carrito</button></td>
                        </tr>



                    </table>



                
                   
                  
                </div>
              </div>
            </li>
    );
}

export {Carrito}