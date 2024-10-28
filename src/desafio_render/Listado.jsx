/* eslint-disable react/prop-types */
import Table from 'react-bootstrap/Table';

function Listado({ esAdmin, eliminarColaborador, setColaboradorEditando, colaboradoresFiltrados }) {
  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
            {esAdmin && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {colaboradoresFiltrados.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.nombre}</td>
              <td>{c.correo}</td>
              <td>{c.edad}</td>
              <td>{c.cargo}</td>
              <td>{c.telefono}</td>
              {esAdmin && (
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2" // Estilo del botón Editar
                    onClick={() => setColaboradorEditando(c)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm" // Estilo del botón Eliminar
                    onClick={() => eliminarColaborador(c.id)}
                  >
                    Eliminar
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>

  );
}

export default Listado;