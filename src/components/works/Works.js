import React from 'react'
import { FormattedMessage } from 'react-intl'
import { worksList } from './worksList'

const Works = () => {
    return (
        <section className='worksSection' id='portfolio'>
            <button className='btn1'>
                <FormattedMessage
                    id='works.btnPrimary'
                    defaultMessage='My works'
                />
            </button>
            <h2>
                <FormattedMessage
                    id='works.title'
                    defaultMessage='Featured Works'
                />
            </h2>
            <div className='worksGrid'>
                {worksList.map((work) => {
                    return (
                        <div className={'work work' + work.id} style={{ backgroundImage: `url(${work.image})` }}>
                            <div className='workDescription'>
                                <h3>{work.title}</h3>
                                <p>
                                    <FormattedMessage
                                        id={'work.description' + work.id}
                                        defaultMessage="Proyect description"
                                    />
                                </p>
                                <div className='btnContainer' style={{'gap': '2rem'}}>
                                    {work.github && <a className='btn2' href={work.github} target='_blank' rel='noreferrer'>GitHub</a>}
                                    <a href={work.url} target='_blank' rel='noreferrer' className='btn2'>Website</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Works