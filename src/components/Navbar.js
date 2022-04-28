import React from 'react'
import { useState } from 'react'
import menu from './../img/menu.png'
import MobileMenu from './MobileMenu'
import logoIcon from '../img/icons/logoIcon.png'
import englishIcon from '../img/icons/english.png'
import spanishIcon from '../img/icons/spanish.png'

const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false)

    return (
        <>
            <MobileMenu menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
            <header className="header" id='header'>
                <div className="headerLogo">
                    <a href="/"><img src={logoIcon} alt="logoIcon" /></a>
                </div>
                <div className="headerNav">
                    <nav className="nav" id='navMenu'>
                        <a href="#home">Home</a>

                        <a href="#about">About me</a>

                        <a href="#skills">Skills</a>

                        <a href="#portfolio">Portfolio</a>

                        <a href="#contact" >Contact</a>
                    </nav>
                </div>
                <div className='idiomaContainer'>
                    <img src={englishIcon} alt="englishIcon" />
                    <img src={spanishIcon} alt="spanishIcon" />
                </div>
                <div className="hamburguerNav">
                    <img src={menu} alt="menu" onClick={() => setMenuVisible(true)} />
                </div>
            </header>
        </>
    )
}

export default Navbar

