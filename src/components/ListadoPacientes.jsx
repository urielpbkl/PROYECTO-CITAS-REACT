import React from 'react'
import { Paciente } from './Paciente'
import { Error } from './Error';

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (

        <>
          <h2 className="font-black text-3xl text-center">
            Listado Pacientes
          </h2>

          <p className='text-lg mt-5 text-center mb-10'>
            Administra tus {''}
            <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
          </p>


          {pacientes.map((paciente) => ( //ITERAMOS EL ARREGLO QUE CONTIENE A LOS PACIENTES PARA MOSTRARLOS EN EL HTML
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente} //ESTA FUNCIÓN VIENE DESDE "app.js"
            />
          ))}

        </>

      ) : (
        <>
          <Error>
            No hay registros para mostrar
          </Error>
        </>
      )}





    </div>
  )
}
