function Equipo(equipo,guardarEquipo,loading,error,){

    return (
        <div>
        <h1>Equipo Pokemon</h1>
        {loading && <p>Cargando ...</p>}
        {error && <p>Se ha producido un error.</p>}
        {(!!loading && equipo ===0) && <p>Selecciona a tu equipo</p> }
        </div>
    )
}

export {Equipo}