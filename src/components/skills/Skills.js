import React from 'react'
import { FormattedMessage } from 'react-intl'
import { skills } from './skillsImages'
import { newSkills } from './newSkillsImage'

const Skills = () => {
    return (
        <section className='skillsSection' id='skills'>
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
                <button className='btn2' onClick={()=> window.location = '#contact'}>
                    <FormattedMessage
                        id='skills.contact'
                        defaultMessage='Contact me'
                    />
                </button>
            </div>
            <div className='allSkillsContainer'>
                <div className='skillsGrid'>
                    {skills.map(skill => {
                        return (
                            <div className='skillContainer'>
                                <img src={skill} alt="skillImage" />
                            </div>
                        )
                    })}
                </div>
                <div className='newSkills'>
                    <h3>
                        <FormattedMessage 
                            id='skills.currentlyLearning'
                            defaultMessage='Currently learning: '
                        />
                    </h3>
                    <div className='newSkillsContainer'>
                        {newSkills.map(skill =>{
                            return(
                                <div className='skillContainer'>
                                    <img src={skill} alt="skillImage" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills