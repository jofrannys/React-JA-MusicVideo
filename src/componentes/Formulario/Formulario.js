
import { useState } from "react"
import "./Formulario.css"
import Campo from "../campo/campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
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
            foto: foto,
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
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingrese nombre" 
                required 
                valor={nombre}
                actualizarValor= {actualizarNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingrese su puesto" 
                required
                valor={puesto}
                actualizarValor={actualizarPuesto} 
            />
            <Campo 
                titulo="Foto" 
                placeholder="Cargar su foto" 
                required 
                valor={foto}
                actualizarValor={actualizarFoto} 
            />
            <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos = {props.equipos}
            />
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el Equipo.</h2>
            <Campo
                titulo="Titulo" 
                placeholder="Ingrese titulo" 
                required 
                valor={titulo}
                actualizarValor= {actualizarTitulo}
            />
            <Campo
                titulo="Color" 
                placeholder="Ingrese el color Hex" 
                required
                valor={color}
                actualizarValor={actualizarColor} 
                type="color"
            />
            <Boton texto="Registrar Equipo"/>
        </form>
    </section>
}

export default Formulario