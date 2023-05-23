import "./Header.css"
import { useState } from "react";

function Header(props) {
    return <header className="header" id="header">
        <a href="#" class="logo">JA | MusicVideo.</a>
        <nav class="navbar">
            <a href="#Banner">home</a>
            <a alt="add" onClick={props.cambiarMostar} >Agregar</a>
                
        </nav>
        
    </header>
        
} 

export default Header