import React from 'react'

const Proyectos = (props) => {
    const { proyectos } = props;

    return (
        <div className="proyectosContenedor" id="proyectos">
            <h2 className="titulo">TRABAJOS</h2>
            <div className="proyectosSection">
                <div className="gridProyectos">
                    {proyectos.map((proyecto, id) => {
                        return (
                            <a href={proyecto.url}>
                                <div className="proyectoContenedor">
                                    <h2 className="titulo">{proyecto.name}</h2>
                                    <h4 className="texto">{proyecto.description}</h4>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Proyectos
