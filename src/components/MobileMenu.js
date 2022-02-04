import React from 'react';
import retrato from './../img/retrato.png'
import cerrar from './../img/cerrar.png'

const MobileMenu = ({ menuVisible, setMenuVisible }) => {

    const navSinglePage = (e) => {
        e.preventDefault();

        setMenuVisible(false)

        const seccion = document.querySelector(e.target.attributes.href.value);

        seccion.scrollIntoView({
            behavior: 'smooth',
        })
    }

    return (
        <div className={menuVisible ? 'mobileMenuContainer' : 'invisible'}>
            <div className='topMenu' onClick={() => { setMenuVisible(false) }}>
                <img src={cerrar} alt="cerrarIcon" />
            </div>
            <div className='enlacesContainer'>
                <img src={retrato} alt="ronepixeleado" id='retratoMenu' />
                <nav className='enlaces'>
                    <a href="#skills" onClick={navSinglePage}>Tecnologias</a>

                    <a href="#proyectos" onClick={navSinglePage}>Trabajos</a>

                    <a href="#contacto" onClick={navSinglePage}>Contacto</a>
                </nav>
            </div>
            <div className="headerLogo">
                <a href="/" className="logo">{"</"}<span>R1</span>{">"}</a>
            </div>
        </div>
    )
};

export default MobileMenu;
