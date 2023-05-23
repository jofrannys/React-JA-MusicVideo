
import { useState } from "react"
import "./Formulario.css"
import Campo from "../campo/campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [video, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")
   
    const {registrarColaborador, crearEquipo} = props 

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            video: video,
            equipo: equipo
        }
        props.registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }



    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Ingresa datos del nuevo Video.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingrese nombre" 
                required 
                valor={nombre}
                actualizarValor= {actualizarNombre}
            />
            <Campo 
                titulo="Estilo" 
                placeholder="Ingresa el Estilo" 
                required
                valor={puesto}
                actualizarValor={actualizarPuesto} 
            />
            <Campo 
                titulo="video" 
                placeholder="Cargar su video" 
                required 
                valor={video}
                actualizarValor={actualizarFoto} 
            />
            <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos = {props.equipos}
            />
            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario