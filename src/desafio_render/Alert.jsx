/* eslint-disable react/prop-types */

function Alert({ mensaje }) {
  return (
    <>
      <div className={`alert alert-${mensaje.tipo}`} role="alert">
        {
          mensaje.texto
        }
      </div>
    </>
  )
}
export default Alert;