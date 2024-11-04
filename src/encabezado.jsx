import { Carrito } from "./carrito"

export default function Header(){
// aqui van todas las funciones que se van a encargar de modificar el comportamiento de nuestro codigo

    return(
        <header>
        <nav>
          <h1>Coffie code</h1>
        <ul id="barnav" className="nav">
            <li><a href='#'>Tienda en linea</a></li>
            <li>|</li>
            <li><a href="#">Código ejemplo</a></li>
            <li>|</li>
            <li><a href="#">Plantillas</a></li>
            <li>|</li>
            <Carrito />
           
        </ul>
        </nav>
    </header>
    )
}