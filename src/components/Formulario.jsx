import React, { useEffect, useState } from 'react'
import { Error } from './Error';

export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {


  //AQUÍ DEBE DE DECLARARSE EL ESTADO DEL COMPONENTE
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) { //SI HAY DATOS EN EL OBJETO QUE GUARDA LOS DATOS DEL REGISTRO QUE QUEREMOS EDITAR
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }

  }, [paciente]) //CADA QUE HAYA UN CAMBIO EN "paciente" SE VA A EJECUTAR ESE CÓDIGO, POR ESO PONEMOS "paciente" DENTRO DEL ARREGLO

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //VALIDACIÓN DE LOS CAMPOS DEL FORMULARIO
    if ([nombre, propietario, email, fecha, sintomas].includes('')) { //SI ALGUNO DE LOS CAMPOS INCLUYE UN STRING VACÍO
      setError(true) //EL ESTADO DEL ERROR CAMBIA A "true"
      return;
    }
    setError(false)

    // OBJETO QUE TRAE LOS DATOS DEL FORMULARIO
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if(paciente.id){
      //EDITANDO REGISTRO EXISTENTE
      objetoPaciente.id = paciente.id //"objetoPaciente" VA A SER EL REGISTRO ACTUALIZADO
                                      //'paciente' VA A SER EL REGISTRO QUE SELECCIONÉ PARA EDITAR
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente: pacienteState )  //BUSCAMOS USANDO EL "id" EL OBJETO QUE ESTAMOS MODIFICANDO EN EL ARREGLO QUE TIENE TODOS LOS REGISTROS

      setPacientes(pacientesActualizados) //ACTUALIZAMOS EL "STATE"
      setPaciente({}) //RE-INICIAMOS EL "STATE" QUE CONTIENE EL REGISTRO A EDITAR

    }else{ 
      //NUEVO REGISTRO
      objetoPaciente.id = generarId(); // AGREGAMOS "id" AL NUEVO REGISTRO

      setPacientes([...pacientes, objetoPaciente]) //USAMOS EL SPREAD OPERATOR (...), PARA QUE HAGA UNA COPIA DE "objetoPaciente" Y AGREGUE AL FINAL DE "pacientes", QUE POR DEFAULT ES UN ARREGLO VACÍO EL NUEVO ELEMENTO, ASÍ NO EDITAMOS EL OBJETO "objetoPaciente"
    }
        

    //DESPUÉS DE AGREGAR EL NUEVO REGISTRO, RESETEAMOS EL FORMULARIO PARA QUE ESTÉ VACÍO
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Adminístralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>

        {/* SI HAY UN ERROR, MANDAMOS MENSAJE EN PANTALLA DEL ERROR */}
        {error &&
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        }

        <div className='mb-5'>
          {/* CON "htmlFor" AL DAR CLICK EN EL "LABEL", SE HABILITA EL INPUT */}
          <label htmlFor='nombreMascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input
            id='nombreMascota'
            type='text'
            placeholder='Nombre de la Mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre} //nombre viene del "state" que declaramos arriba en el hook
            onChange={(e) => setNombre(e.target.value)} //CADA QUE ESTE EVENTO SE REGISTRE, VA A MODIFICAR "nombre"
          />
        </div>

        <div className='mb-5'>
          {/* CON "htmlFor" AL DAR CLICK EN EL "LABEL", SE HABILITA EL INPUT */}
          <label htmlFor='nombrePropietario' className='block text-gray-700 uppercase font-bold'>Nombre del Propietario</label>
          <input
            id='nombrePropietario'
            type='text'
            placeholder='Nombre del Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={propietario} //nombre viene del "state" que declaramos arriba en el hook
            onChange={(e) => setPropietario(e.target.value)} //CADA QUE ESTE EVENTO SE REGISTRE, VA A MODIFICAR "propietario"
          />
        </div>

        <div className='mb-5'>
          {/* CON "htmlFor" AL DAR CLICK EN EL "LABEL", SE HABILITA EL INPUT */}
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
          <input
            id='email'
            type='email'
            placeholder='Coloca un Email'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email} //nombre viene del "state" que declaramos arriba en el hook
            onChange={(e) => setEmail(e.target.value)} //CADA QUE ESTE EVENTO SE REGISTRE, VA A MODIFICAR "email"
          />
        </div>

        <div className='mb-5'>
          {/* CON "htmlFor" AL DAR CLICK EN EL "LABEL", SE HABILITA EL INPUT */}
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Fecha de Alta</label>
          <input
            id='alta'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fecha} //nombre viene del "state" que declaramos arriba en el hook
            onChange={(e) => setFecha(e.target.value)} //CADA QUE ESTE EVENTO SE REGISTRE, VA A MODIFICAR "fecha"
          />
        </div>

        <div className='mb-5'>
          {/* CON "htmlFor" AL DAR CLICK EN EL "LABEL", SE HABILITA EL INPUT */}
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Síntomas</label>
          <textarea
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-800 rounded-md'
            placeholder='Describe los síntomas'
            value={sintomas} //nombre viene del "state" que declaramos arriba en el hook
            onChange={(e) => setSintomas(e.target.value)} //CADA QUE ESTE EVENTO SE REGISTRE, VA A MODIFICAR "sintomas"
          />
        </div>

        {paciente.id ? <button //SI HAY DATOS EN EL OBJETO QUE JALA LOS DATOS DEL REGISTRO QUE QUEREMOS EDITAR
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-900 transition-all'
        >
          Editar Registro
        </button> : <button
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-900 transition-all'
        >
          Agregar Registro
        </button>}


      </form>
    </div>
  )
}
