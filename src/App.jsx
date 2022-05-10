import { useEffect, useState } from "react"
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"

//UNA SOLA VEZ CUANDO EL COMPONENTE ESTÉ LISTO, POR ESO EL ARRAY ESTÁ VACÍO

function App() {

  const [pacientes, setPacientes] = useState([]); //DECLARAMOS EL "HOOK" CON EL QUE VAMOS A GENERAR UN ARREGLO(pacientes) CON TODOS LOS DATOS DE CADA PACIENTE
  const [paciente, setPaciente] = useState({}); //EN ESTE OBJETO VAMOS A TRAER LOS DATOS DEL REGISTRO QUE QUEREMOS EDITAR, COMO CADA REGISTRO ES UN OBJETO, LO INICIALIZAMOS COMO UN OBJETO VACÍO

  useEffect(() => {

    const obtenerLocalStorage = () =>{

      const pacientesLocalStorage = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLocalStorage)
    }

    obtenerLocalStorage();
  }, []);


  //  AGREGAR A "local storage" LOS REGISTROS QUE VAMOS CREANDO
  useEffect(() => {

    localStorage.setItem('pacientes', JSON.stringify(pacientes)); //CONVERTIMOS EL ARREGLO A UN "STRING"

  }, [pacientes]) //CADA QUE HAYA UN CAMBIO EN "pacientes" SE VA A EJECUTAR ESE CÓDIGO, POR ESO PONEMOS "pacientes" DENTRO DEL ARREGLO, QUE HAY QUE RECORDAR QUE "pacientes" ES EL ARREGLO QUE TIENE TODOS LOS REGISTROS 

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id); //FILTRAMOS LOS REGISTROS QUE NO SON EL QUE SELECCIONAMOS PARA QUITAR EL QUE QUEREMOS ELIMINAR
    setPacientes(pacientesActualizados); //ACTUALIZAMOS EL ARREGLO QUE TIENE LOS REGISTROS ALMACENADOS
  }

  return (
    <div className="container mx-auto mt-2">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes} //MÁNDAMOS COMO "PROP" A NUESTRO "HOOK"
          paciente={paciente} //MANDAMOS LOS DATOS DEL REGISTRO QUE QUEREMOS MODIFICAR
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
