import React from 'react'
import retrato from './../img/agustinVera.jpg'
import Typed from 'react-typed';

const Sobremi = () => {

    const navSinglePage = (e)=>{
        e.preventDefault();

        const seccion = document.querySelector(e.target.attributes.href.value);

        seccion.scrollIntoView({
            behavior: 'smooth',
        })
    }
    return (
        <div className="sobreMiContainer" id="sobremi">
            <div className="sobreMiSection">
                <img src={retrato}
                    alt="retrato Agustin Vera"
                />
                <div className="sobreMi">
                    <Typed
                        strings={['Agustin', 'Rone', 'R-1']}
                        className="titulo"
                        typeSpeed={80}
                        backSpeed={90}
                        loop
                    />
                    <p className="texto">¡Hola! Mi nombre es Agustin Vera, aunque algunos me llaman Rone. Soy actual estudiante de la carrera Ingenieria en Informatica de la Universidad de Mendoza y ademas desarrollador web full stack Junior. La tecnologia es un mundo que siempre me apasionó y no me canso de aprender de ella. Entre mis pasatiempos, cuando no estoy estudiando o programando, suelo jugar videojuegos, ver peliculas y dibujar o pintar graffitis.</p> 
                </div>
            </div>
            <div className="btnContactoContenedor">
                <a href="#contacto" className="btn" onClick={(e)=> navSinglePage(e)}>Contactame</a>
            </div>
        </div>
    )
}

export default Sobremi
