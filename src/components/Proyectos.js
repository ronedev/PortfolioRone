import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Proyectos = (props) => {
    const { proyectos } = props;

    return (
        <div className="proyectosContenedor" id="proyectos">
            <h2 className="titulo">TRABAJOS</h2>
            <div className="proyectosSection">
                <div className="gridProyectos">
                    {proyectos.map((proyecto, id) => {
                        console.log(proyecto)
                        return (
                            <div className="proyectoContenedor" onClick={()=> window.location = proyecto.url} >
                                <h2 className="titulo">{proyecto.name}</h2>
                                <h4 className="texto">{proyecto.description}</h4>
                            </div>
                        )
                    })}
                </div>
                <Carousel className="mobileProyectos" showArrows={false} showThumbs={false} showStatus={false}>
                    {proyectos.map((proyecto, id) => {
                        console.log(proyecto)
                        return (
                            <div className="proyectoContenedor" onClick={()=> window.location = proyecto.url} >
                                <h2 className="titulo">{proyecto.name}</h2>
                                <h4 className="texto">{proyecto.description}</h4>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default Proyectos
