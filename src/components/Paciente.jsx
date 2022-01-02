const Paciente = ({ paciente, setPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas } = paciente
  return (
    <div className="m-3 bg-white shadow-md px-5 py-6 rounded-lg">
      <p className="font-bold mb-3 text-gray-800 uppercase">Nombre: {''}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-800 uppercase">Propietario: {''}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-800 uppercase">Email: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-800 uppercase">Fecha alta: {''}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-800 uppercase">Síntomas: {''}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg"
          type="button"
          onClick={ ()=> setPaciente(paciente) }>
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
          type="button">
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente
