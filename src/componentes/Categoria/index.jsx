import "./Categoria.css"
import Video from "../Video"
import hexToRgba from "hex-to-rgba"


const Categoria = (props) =>{

    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo = {borderColor: colorPrimario}

    return <>
    { colaboradores.length > 0 && 
    <section className="categoria" style={obj}>
       
        <h3 style={estiloTitulo} >{titulo}</h3>
        <div className="categorias">
        {
            colaboradores.map((colaborador, index) => <Video datos={colaborador} key={index} colorPrimario = {colorPrimario} 
            eliminarColaborador={eliminarColaborador}
            like={like}
            /> )
        }

        </div>
    </section>}
    </>
}

export default Categoria