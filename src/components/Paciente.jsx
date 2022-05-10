import React from 'react'

export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente //PODEMOS USAR DESTRUCTURING PARA EVITAR PONER "paciente.nombre", etc.

    const handleEliminar = () =>{
        const respuesta = confirm('Deseas eliminar el registro?');

        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className="text-gray-700 uppercase font-bold">
                Nombre: {''}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>

            <p className="text-gray-700 uppercase font-bold">
                Propietario: {''}
                <span className='font-normal normal-case'>{paciente.propietario}</span>
            </p>

            <p className="text-gray-700 uppercase font-bold">
                Email: {''}
                <span className='font-normal normal-case'>{paciente.email}</span>
            </p>

            <p className="text-gray-700 uppercase font-bold">
                Fecha de Alta: {''}
                <span className='font-normal normal-case'>{paciente.fecha}</span>
            </p>

            <p className="text-gray-700 uppercase font-bold">
                Síntomas : {''}
                <span className='font-normal normal-case'>{paciente.sintomas}</span>
            </p>

            <div className='flex justify-between mt-10'>
                <button
                    type='button'
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-md'
                    onClick={() => setPaciente(paciente)} //USAMOR ARROW FUNCTION PORQUE ESTAMOS AGREGANDO UN PARÁMETRO A LA FUNCIÓN, ESPERAMOS A QUE SUCEDA EL CLICK Y MANDAMOS LLAMAR LA FUNCIÓN "setPaciente"
                >
                    Editar
                </button>
                <button
                    type='button'
                    className='py-2 px-10 bg-red-400 hover:bg-red-600 text-white font-bold uppercase rounded-md'
                    onClick={handleEliminar} //LLAMAMOS LA FUNCIÓN SIN USAR PARENTESIS(), PORQUE NO QUEREMOS QUE SE EJECUTE AUTOMÁTICAMENTE, QUEREMOS QUE HAGA ALGO MÁS ANTES DE EJECUTARSE, QUE EN ESTE CASO ES QUE PREGUNTE SI REALMENTE QUIERE ELIMINAR EL REGISTRO
                >
                    Eliminar
                </button>
            </div>

        </div>
    )
}
