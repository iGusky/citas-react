import { useState } from "react"
import Error from "./Error"

const Formulario = ({pacientes, setPacientes}) => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return fecha + random
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validacion del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay almenos un campo vacio')
      setError(true)
      return
    }
    setError(false)

    // Objeto paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
      id: generarId()
    }
    setPacientes([...pacientes, objetoPaciente]);

    // Reiniciar formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-6">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form 
        onSubmit={ handleSubmit }
        className="bg-white shadow-md rounded-lg py-6 px-5 mb-10"
      >
        { error && <Error mensaje='Todos los campos son obligatorios' />}
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e)=>{ setNombre(e.target.value)}}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e)=>{ setPropietario(e.target.value)}}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email contacto propietario"
            value={email}
            onChange={(e)=>{ setEmail(e.target.value)}}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input
            type="date"
            id="alta"
            value={fecha}
            onChange={(e)=>{ setFecha(e.target.value)}}
            className="border-2 w-full p-2 mt-2 rounded-lg"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e)=>{ setSintomas(e.target.value)}}>
              
          </textarea>
        </div>
        <input
          type="submit"
          value="Agregar Paciente"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold text-center hover:bg-indigo-700 cursor-pointer transition-all"
        />
      </form>
    </div>
  )
}

export default Formulario
