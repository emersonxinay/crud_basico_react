/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import './Formulario.css'
function FormularioBoostrap({ agregarColaborador, actualizarColaborador, colaboradorEditando }) {
  const datos_iniciales = {
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  }
  const [colaborador, setColaborador] = useState(datos_iniciales);
  const [mensajeError, setMensajeError] = useState(''); // Nuevo estado para el mensaje de error

  useEffect(() => {
    if (colaboradorEditando) {
      setColaborador(colaboradorEditando);
      setMensajeError(''); // Limpiar el mensaje de error cuando se empieza a editar

    } else {
      setColaborador(datos_iniciales);
      setMensajeError(''); // Limpiar el mensaje de error al resetear el formulario

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colaboradorEditando]);
  const cambiandoDatos = (e) => {
    setColaborador({ ...colaborador, [e.target.name]: e.target.value })
    setMensajeError(''); // Limpiar mensaje de error al cambiar datos

  }
  const enviarDatos = (e) => {
    e.preventDefault();
    if (Object.values(colaborador).some(campo => campo === '')) {
      setMensajeError('Todos los campos son obligatorios'); // Mostrar mensaje de error
      return; // No restablecer el formulario
    }

    if (colaboradorEditando) {
      actualizarColaborador(colaborador);
    } else {
      agregarColaborador(colaborador);
    }
    setColaborador(datos_iniciales); // Solo restablecer si el envío es exitoso
  }
  return (
    <Form className='formulario' onSubmit={enviarDatos} >
      <Form.Control type="text" name='nombre' placeholder="Nombre" onChange={cambiandoDatos} value={colaborador.nombre} />
      <Form.Control type="email" name='correo' placeholder="Correo" onChange={cambiandoDatos} value={colaborador.correo} />
      <Form.Control type="number" name='edad' placeholder="Edad" onChange={cambiandoDatos} value={colaborador.edad} />
      <Form.Control type="text" name='cargo' placeholder="Cargo" onChange={cambiandoDatos} value={colaborador.cargo} />
      <Form.Control type="text" name='telefono' placeholder="Telefono" onChange={cambiandoDatos} value={colaborador.telefono} />
      {mensajeError && <div className="alert alert-danger">{mensajeError}</div>} {/* Mostrar mensaje de error */}

      <Button variant="primary" type="submit">
        {colaboradorEditando ? 'Actualizar Colaborador' : 'Agregar Colaborador'}

      </Button>
    </Form>
  );
}

export default FormularioBoostrap;