import React from 'react'
import menu from './../img/menu.png'

const Navbar = () => {

    const navSinglePage = (e)=>{
        e.preventDefault();

        const seccion = document.querySelector(e.target.attributes.href.value);

        seccion.scrollIntoView({
            behavior: 'smooth',
        })
    }

    const abrirMenu = () =>{
        const nav = document.getElementById('navMenu')
        const header = document.getElementById('header')
        if(nav.classList === 'nav'){
            nav.classList.replace('nav', 'navMenu')
            header.style.padding = '7rem 0'
        }else{
            nav.classList.replace('navMenu', 'nav')
            header.style.padding = '0 2rem'
        }
    }

    return (
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
                <img src={menu} alt="menu" onClick={abrirMenu}/>
            </div>
            {/* <div className="headerIdiomas">
                <img src={arg} alt="" />
                <img src={ing} alt=""/>
            </div> */}
        </header>
    )
}

export default Navbar

