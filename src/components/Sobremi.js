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
                    <p className="texto">¡Hola! Mi nombre es Agustin Vera, aunque algunos me llaman Rone. Soy actual estudiante de la Tecnicatura Universitaria en Programación de la UTN (Universidad Tecnologica Nacional) y ademas Frontend Developer Junior. Actualmente mis planes a futuro son trabajar en una empresa, terminar la Tecnicatura, tal vez luego, seguir por la ingenieria y por último, ampliar y fortalecer mi stack. Entre mis pasatiempos, cuando no estoy estudiando o programando, suelo jugar videojuegos, dibujar o pintar graffitis.</p> 
                </div>
            </div>
            <div className="btnContactoContenedor">
                <a href="#contacto" className="btn" onClick={(e)=> navSinglePage(e)}>Contactame</a>
            </div>
        </div>
    )
}

export default Sobremi
