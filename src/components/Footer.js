import React from 'react'
import instagram from './../img/redes/instagram.png'
import twitter from './../img/redes/gorjeo.png'
import linkedin from './../img/redes/linkedin.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="redes">
                <a href="https://www.instagram.com/agustin_vera25/">
                    <img src={instagram} alt=""/>
                </a>
                <a href="https://twitter.com/AgustinAKArone">
                    <img src={twitter} alt=""/>
                </a>
                <a href="https://www.linkedin.com/in/agustin-vera-4600b4221/">
                    <img src={linkedin} alt=""/>
                </a>
            </div>
            <span className="line"></span>
            <p className="texto">Con ❤ Agustin Vera, aka Rone. © Derechos reservados RoneDev</p>
        </footer>
    )
}

export default Footer
