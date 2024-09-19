const objeto = {
    nombre:"Daniel",
    Apellido:"Perez"
}

const objeto2 = {
    edad: 15,
    Domicilio: "Av siempre viva"
}
const junto = {
    ...objeto,
    ...objeto2
}
console.log(junto)