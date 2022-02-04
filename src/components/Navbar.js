import React from 'react'
import { useState } from 'react'
import menu from './../img/menu.png'
import MobileMenu from './MobileMenu'

const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false)

    const navSinglePage = (e) => {
        e.preventDefault();

        const seccion = document.querySelector(e.target.attributes.href.value);

        seccion.scrollIntoView({
            behavior: 'smooth',
        })
    }

    return (
        <>
            <MobileMenu menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
            <header className="header" id='header'>
                <div className="headerLogo">
                    <a href="/" className="logo">{"</"}<span>R1</span>{">"}</a>
                </div>
                <div className="headerNav">
                    <nav className="nav" id='navMenu'>
                        <a href="#skills" onClick={navSinglePage}>Tecnologias</a>

                        <a href="#proyectos" onClick={navSinglePage}>Trabajos</a>

                        <a href="#contacto" onClick={navSinglePage}>Contacto</a>
                    </nav>
                </div>
                <div className="hamburguerNav">
                    <img src={menu} alt="menu" onClick={() => setMenuVisible(true)} />
                </div>
            </header>
        </>
    )
}

export default Navbar

