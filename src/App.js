import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import Formulario from  "./componentes/Formulario/Formulario.js";
import './App.css';
import Header from "./componentes/Header/Header.jsx";
import Categoria from "./componentes/Categoria/index.jsx";
import Footer from "./componentes/Footer/index.jsx";
import Banner from "./componentes/Banner/index.jsx";

function App() {
  
  const [mostrarFormulario, actualizarMostar] = useState(false)
  const [colaboradores, actualizarColaboradores,] = useState([{
    id: uuidv4(),
    equipo: "Kpop",
    video: "https://youtu.be/Vpromp90G4g",
    puesto: "kpop Girls",
    nombre: "Hyolyn",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Kpop",
    video: "https://youtu.be/T0XInumvMjM",
    puesto: "kpop Girls",
    nombre: "Aespa",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Heavy Metal",
    video: "https://youtu.be/bd5ZDo3l4wA",
    puesto: "heavy metal español",
    nombre: "Tierra Santa",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Heavy Metal",
    video: "https://youtu.be/X4bgXH3sJ2Q",
    puesto: "heavy metal",
    nombre: "Iron Maiden",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Pop",
    video: "https://youtu.be/Eo-KmOd3i7s",
    puesto: "pop",
    nombre: "Nsync",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Pop",
    video: "https://youtu.be/QYh6mYIJG2Y",
    puesto: "pop Girls",
    nombre: "Ariana Grande",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Alternativo",
    video: "https://youtu.be/JuLsB8_SYU8",
    puesto: "rock",
    nombre: "Cuarteto de Nos",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Alternativo",
    video: "https://youtu.be/aDdOnl0bHO4",
    puesto: "girls",
    nombre: "Joan Osborne",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Baladas",
    video: "https://youtu.be/ODsqyfI5R28",
    puesto: "balada",
    nombre:"Chayanne",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Baladas",
    video: "https://youtu.be/vM6r0Z8ie1g",
    puesto: "Balada",
    nombre:"Camilo Secto",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Opening Anime",
    video: "https://youtu.be/1gftUBdwcmc",
    puesto: "Anime",
    nombre:"Saint Seiya",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Opening Anime",
    video: "https://youtu.be/lN05FU2Lkg0",
    puesto: "Anime",
    nombre:"Death Note",
    fav: true
  },


 

 
  ])

  const [equipos, actualizarEquipos] = useState(
    [

      {
        id: uuidv4(),
        titulo:"Kpop",
        colorPrimario: "#464040",
        colorSecundario:"#D9F7E9"
      },
  
      {
        id: uuidv4(),
        titulo:"Heavy Metal",
        colorPrimario: "#5e5a5a",
        colorSecundario:"#E8F8FF"
      },
  
      {
        id: uuidv4(),
        titulo:"Pop",
        colorPrimario: "#464040",
        colorSecundario:"#F0F8E2"
      },
  
      {
        id: uuidv4(),
        titulo:"Alternativo",
        colorPrimario: "#5e5a5a",
        colorSecundario:"#FDE7E8"
      },
  
      {
        id: uuidv4(),
        titulo:"Baladas",
        colorPrimario: "#464040",
        colorSecundario:"#FAE9F5"
      },
  
      {
        id: uuidv4(),
        titulo:"Opening Anime",
        colorPrimario: "#5e5a5a",
        colorSecundario:"#FFF5D9"
      }
      
  ])
  const cambiarMostar = () => {
    actualizarMostar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador)
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id) => {
    console.log('Eliminar colaborador', id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id)
    actualizarColaboradores(nuevosColaboradores)
  }

  const actualizarColor = (color, id ) => {
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })
    
    actualizarEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }])
  }

  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if( colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    }) 
    
    actualizarColaboradores(colaboradoresActualizados)
  }

  

  return (
    <div>
      <Header cambiarMostar={cambiarMostar}/>
      
      { 
      mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador = {registrarColaborador}
        crearEquipo={crearEquipo}
        /> 
        
      }
      <Banner  />
      
      
      {
        equipos.map( (equipo) => <Categoria  
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
        )
        
      }
      
      <Footer />
    </div>
  );
}

export default App;
