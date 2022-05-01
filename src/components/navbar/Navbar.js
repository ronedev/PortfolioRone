import React, { useContext, useState } from 'react'
import logoIcon from 'img/icons/logoIcon.png'
import englishIcon from 'img/icons/english.png'
import spanishIcon from 'img/icons/spanish.png'
import { langContext } from 'components/context/langContext'
import { FormattedMessage } from 'react-intl'

const Navbar = () => {

    const [mobileMenuActive, setMobileMenuActive] = useState(false)
    const [mobileMenuDesactive, setMobileMenuDesactive] = useState(null)

    const idiomaContext = useContext(langContext)

    return (
        <>
            <nav className="nav" id='header'>
                <div className="navLogo">
                    <a href="/"><img src={logoIcon} alt="logoIcon" /></a>
                </div>
                <ul className={mobileMenuActive ? 'navList mobileActive' : mobileMenuDesactive ? 'navList mobileActive desactive' : 'navList'} id='navMenu'>
                    <li><a href="#home" onClick={()=>{
                        setMobileMenuActive(false)
                        setMobileMenuDesactive(true)
                        window.location = '#home'
                    }}>
                        <FormattedMessage
                            id='nav.home'
                            defaultMessage='Home'
                        />
                    </a></li>

                    <li><a href="#about" onClick={()=>{
                        setMobileMenuActive(false)
                        setMobileMenuDesactive(true)
                        window.location = '#about'
                    }}>
                        <FormattedMessage
                            id='nav.about'
                            defaultMessage='About me'
                        />
                    </a></li>

                    <li><a href="#skills" onClick={()=>{
                        setMobileMenuActive(false)
                        setMobileMenuDesactive(true)
                        window.location = '#skills'
                    }}>
                        <FormattedMessage
                            id='nav.skills'
                            defaultMessage='Skills'
                        />
                    </a></li>

                    <li><a href="#portfolio" onClick={()=>{
                        setMobileMenuActive(false)
                        setMobileMenuDesactive(true)
                        window.location = '#portfolio'
                    }}>
                        <FormattedMessage
                            id='nav.portfolio'
                            defaultMessage='Portfolio'
                        /></a></li>

                    <li><a href="#reviews" onClick={()=>{
                        setMobileMenuActive(false)
                        setMobileMenuDesactive(true)
                        window.location = '#reviews'
                    }}>
                        <FormattedMessage
                            id='nav.reviews'
                            defaultMessage='Reviews'
                        /></a></li>

                    <li><a href="#contact" onClick={()=>{
                        setMobileMenuActive(false)
                        setMobileMenuDesactive(true)
                        window.location = '#contact'
                    }}>
                        <FormattedMessage
                            id='nav.contact'
                            defaultMessage='Contact'
                        /></a></li>

                    <div className='idiomaContainer mobile'>
                        <img src={spanishIcon} alt="spanishIcon" onClick={() => {
                            idiomaContext.cambiarIdioma('es-AR')
                            setMobileMenuActive(false)
                            setMobileMenuDesactive(true)
                        }} />
                        <img src={englishIcon} alt="englishIcon" onClick={() => {
                            idiomaContext.cambiarIdioma('en-US')
                            setMobileMenuActive(false)
                            setMobileMenuDesactive(true)
                        }} />
                    </div>
                </ul>
                <div className='idiomaContainer'>
                    <img src={spanishIcon} alt="spanishIcon" onClick={() => {
                        idiomaContext.cambiarIdioma('es-AR')
                    }} />
                    <img src={englishIcon} alt="englishIcon" onClick={() => {
                        idiomaContext.cambiarIdioma('en-US')
                    }} />
                </div>
                <button className={mobileMenuActive ? 'hamburguerNav active' : 'hamburguerNav'} id="hamburger-icon" href="#" title="Menu" onClick={() => {
                    if (mobileMenuActive) {
                        setMobileMenuActive(false)
                        setMobileMenuDesactive(true)
                    } else {
                        setMobileMenuActive(true)
                        setMobileMenuDesactive(false)
                    }
                }}>
                    <span class="line line-1"></span>
                    <span class="line line-2"></span>
                    <span class="line line-3"></span>
                </button>
            </nav>
        </>
    )
}

export default Navbar

