import React from 'react'
import retratoMio from 'img/retratoFondo.png'
import twitter from 'img/icons/twitter.png'
import linkedin from 'img/icons/linkedin.png'
import instagram from 'img/icons/instagram.png'
import github from 'img/icons/github.png'
import { FormattedMessage } from 'react-intl'

const Aboutme = () => {
    return (
        <section className='aboutMeSection' id='about'>
            <div className='socialMedia'>
                <a href="https://www.linkedin.com/in/agustin-vera-4600b4221/" target="_blank" rel='noreferrer'>
                    <img src={linkedin} alt="linkedinIcon" />
                </a>
                <a href="https://github.com/ronedev" target="_blank" rel='noreferrer'>
                    <img src={github} alt="GithubIcon" />
                </a>
                <a href="https://twitter.com/AgustinAKArone" target="_blank" rel='noreferrer'>
                    <img src={twitter} alt="TwitterIcon" />
                </a>
                <a href="https://www.instagram.com/agustin_vera25/" target="_blank" rel='noreferrer'>
                    <img src={instagram} alt="InstagramIcon" />
                </a>
            </div>
            <img src={retratoMio} alt="Agustin Vera" />
            <div className='aboutMeContainer'>
                <button className='btn1'>
                    <FormattedMessage
                        id='about.btnPrymary'
                        defaultMessage='who i am'
                    />
                </button>
                <h2>
                    <FormattedMessage
                        id='about.title'
                        defaultMessage='About me'
                    />
                </h2>
                <p>
                    <FormattedMessage
                        id='about.description'
                        defaultMessage="Hello! I am Agustin Vera and I am a creative Front-end developer (in the future backend too) passionate about creating web applications. I am currently a student of the University Technician in Programming at the UTN (National Technological University). I am always curious to learn new skills, tools and concepts. In addition to working on several full stack solo projects, I have worked on several paid projects as a freelancer."
                    />
                </p>
                <button className='btn2'>
                    <a href="#contact">
                        <FormattedMessage
                            id='about.contact'
                            defaultMessage='Contact me'
                        />
                    </a>
                </button>
            </div>
        </section>
    )
}

export default Aboutme