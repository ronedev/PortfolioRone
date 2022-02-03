import { doc, setDoc } from '@firebase/firestore'
import React, { useState } from 'react'
import db from './../firebase'

const Agregar = (props) => {
    const { proyectos } = props

    const [alerta, setAlerta] = useState(false)
    const [form, setForm] = useState({
        name: '',
        description: '',
        url: ''
    })

    const agregar = async (e) =>{
        e.preventDefault()
        let cantProyectos = proyectos.length + 1 
        const data = {
            id: cantProyectos.toString(),
            name: form.name,
            description: form.description,
            url: form.url
        } 
        await setDoc(doc(db, 'proyects', form.name), data)
        window.location.reload()
    }

    const handleChange = (e) =>{
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }
    return (
        <div className="contenedorCentrado">
            <form className="contactForm" onSubmit={agregar}>
            <h3 className={alerta ? 'titulo active' : 'loading'}>Se ha agregado el proyecto correctamente</h3>
            <fieldset className="legendForm">
                    <label name="name">Nombre del proyecto:</label>
                    <input type="text" name="name" onChange={handleChange} className="campoForm" required></input>
                    <label name="description">Descripcion del proyecto:</label>
                    <input type="text" name="description" onChange={handleChange} className="campoForm" required></input>
                    <label name="url">URL del proyecto:</label>
                    <input type="text" name="url" onChange={handleChange} className="campoForm" required></input>
                </fieldset>
                <button type="submit" className="btn">Agregar proyecto</button>
            </form>
        </div>
    )
}

export default Agregar
