import React from 'react'
import { FormattedMessage } from 'react-intl'
import pixelIcon from 'img/retrato.png'
import Typed from 'react-typed'

const Home = () => {
  return (
    <header className='header' id='home'>
        <section className='home'>
            <h2>
                <FormattedMessage
                    id='home.me'
                    defaultMessage='Hi, I am '
                />
                <span>
                    <Typed
                        strings={['R-1', 'Rone', 'Agustin Vera']}
                        typeSpeed={120}
                        backSpeed={150}
                    />
                </span>
            </h2>
            <h1>
                <FormattedMessage
                    id='home.profession'
                    defaultMessage='Front-end developer Junior'
                />
            </h1>
            <p>
                <FormattedMessage
                    id='home.description'
                    defaultMessage='I love solving and programming solutions to give the user the best possible experience'
                />
            </p>
            <div className='imgContainer'>
                <img src={pixelIcon} alt="pixelIcon" />
            </div>
        </section>
    </header>
  )
}

export default Home