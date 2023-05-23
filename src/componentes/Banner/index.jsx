import { useState } from "react"
import "./Banner.css"
import hexToRgba from "hex-to-rgba"

const Banner = (props) => {


    return <section className="box" id="Banner"  style={{backgroundImage: "url(/img/banner.jpg)"}} >
        
        <div className="content" >
            <h3>JA MUSICVIDEO</h3>
            <p>Los mejores video musicales, para que puedas disfrutar de tus artistas favoritos.</p>
                
        </div>
        <div className="content" >
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/pmkWBgayoUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
        

    </section>
}

export default Banner