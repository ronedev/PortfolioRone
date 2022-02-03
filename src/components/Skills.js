import React from 'react'
import monedaPixel from './../img/moneda2.png'

const Skills = (props) => {

    const { skills } = props;

    const rotateSkill = (e) => {
        const id = e.target.id
        const backFace = 'backSkill' + id;
        const frontFace = 'frontSkill' + id;
        const backSkill = document.getElementById(backFace);
        const frontSkill = document.getElementById(frontFace);
        const skill = e.target.offsetParent.offsetParent;
        skill.style.transform = 'rotateY(-180deg)'
        setTimeout(() => {
            frontSkill.style.visibility = 'hidden';
            setTimeout(()=>{
                backSkill.style.backfaceVisibility = 'visible';
            }, 250)
        }, 590);
    }

    return (
        <div className="skillsContenedor" id="skills">
            <div className="skillsSection">
                <div className="skillsDescription">
                    <h2 className="titulo">TECNOLOGIAS</h2>
                    <p className="texto">Desde hace poco mas de un año empece a estudiar desarrollo web de forma autonoma y autodidacta. YouTube, la comunidad, Udemy y la documentacion fueron mis mejores aliados. Con estas tecnologias que aprendi en este camino y otras que traia desde antes desde hace un par de meses estoy trabajando de forma freelancer como desarrollador web full stack. Entre mi repertorio de habilidades se encuentra: </p>
                </div>
                <div className="skillsGrid">
                    {skills.map((skill, idx) => {
                        return (
                            <div className="flipSkill" onClick={(e)=> rotateSkill(e)} id={idx}>
                                <div className="skill">
                                    <div className="frontSkill" id={'frontSkill' + idx}>
                                        <img
                                            src={monedaPixel}
                                            className='monedaPixel'
                                            alt=""
                                            id={idx}
                                        />
                                    </div>
                                    <div className="backSkill" id={'backSkill' + idx}>
                                        <img
                                            src={skill}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills
