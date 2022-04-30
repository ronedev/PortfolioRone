import React from 'react'
import { FormattedMessage } from 'react-intl'
import twitter from 'img/icons/twitter.png'
import linkedin from 'img/icons/linkedin.png'
import instagram from 'img/icons/instagram.png'
import github from 'img/icons/github.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <p>
                <FormattedMessage
                    id='footer.message'
                    defaultMessage='Developed with 💗 by Agustin Vera'
                />
            </p>
            <div className='socialMedia'>
                <a href="https://www.linkedin.com/in/agustin-vera-4600b4221/">
                    <img src={linkedin} alt="linkedinIcon" />
                </a>
                <a href="https://github.com/ronedev">
                    <img src={github} alt="GithubIcon" />
                </a>
                <a href="https://twitter.com/AgustinAKArone">
                    <img src={twitter} alt="TwitterIcon" />
                </a>
                <a href="https://www.instagram.com/agustin_vera25/">
                    <img src={instagram} alt="InstagramIcon" />
                </a>
            </div>
        </footer>
    )
}

export default Footer