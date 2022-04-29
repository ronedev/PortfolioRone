import React from 'react'
import { FormattedMessage } from 'react-intl'
import { skills } from './skillsImages'


const Skills = () => {
  return (
    <section>
        <div className='skillsDescription'>
            <button className='btn1'>
                <FormattedMessage 
                    id='skills.btnPrimary'
                    defaultMessage='my skills'
                />
            </button>
            <h2>
                <FormattedMessage
                    id='skills.title'
                    defaultMessage='What my programming skills included?'
                />
            </h2>
            <p>
                <FormattedMessage
                    id='skills.description'
                    defaultMessage='I started studying web development using tools like Youtube, Udemy, the community and the documentation of the different technologies. My training as a front-end developer has been 100% self-taught.'
                />
            </p>
            <button className='btn2'>
                <FormattedMessage
                    id='skills.contact'
                    defaultMessage='Contact me'
                />
            </button>
        </div>
        <div className='skillsGrid'>
            {skills.map(skill =>{
                return(
                    <div className='skillContainer'>
                        <img src={skill} alt="skillImage" />
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Skills