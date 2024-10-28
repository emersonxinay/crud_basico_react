/* eslint-disable react/prop-types */
import { useState } from "react";
function Buscador({ buscarColaborador }) {
  const [filtro, setFiltro] = useState('');
  const enviarDatos = (e) => {
    setFiltro(e.target.value);
    buscarColaborador(e.target.value);
  }
  return (
    <>
      <input
        type="text"
        value={filtro}
        placeholder="Buscar..."
        onChange={enviarDatos}  // Función que se ejecuta cada vez que se modifica el input
      />

    </>
  )
}
export default Buscador;