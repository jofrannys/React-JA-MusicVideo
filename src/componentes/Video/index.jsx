import "./Video.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import ReactPlayer from "react-player"

const Video = (props) => {
    const {nombre,puesto, video, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props
    return <div className="video"  >
        
        <div className="img" >
            <ReactPlayer 
            url={video}
            width='100%'
            height='100%'
            controls
            />
        
        </div>
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}/>
       <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            
        </div>
    </div>
}

export default Video