import { collection, getDocs, query, setDoc, where, doc } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import db from './../firebase'

const Actualizar = () => {
    const [alerta, setAlerta] = useState(false)
    const [proyecto, setProyecto] = useState({})
    const [proyectoID, setProyectoID] = useState()
    const [form, setForm] = useState({
        name:'',
        description: '',
        url: ''
    })
    let { id } = useParams();
    let proyect = id.substr(1,1);

    const getProyect = async () => {
        const querySnapshot = await getDocs(query(collection(db, 'proyects'), where('id', '==', proyect)))
        querySnapshot.forEach(doc =>{
            let proyecto = doc.data()
            let proyectoID = doc.id
            setProyectoID(proyectoID)
            setProyecto(proyecto)
            setForm({ ...form, name: proyecto.name, description: proyecto.description, url: proyecto.url })
        })
    }

    const actualizar = async (e) =>{
        e.preventDefault()
        const data = {
            id: proyect,
            name: form.name,
            description: form.description,
            url: form.url
        }
        await setDoc(doc(db, 'proyects', proyectoID), data)
        setAlerta(true)
        setTimeout(() => {
            setAlerta(false)
        }, 3000);
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    useEffect( () =>{
        getProyect();
    }, [])
    return (
        <div className="contenedorCentrado">
            <form className="contactForm" onSubmit={actualizar}>
            <h3 className={alerta ? 'titulo active' : 'loading'}>Se ha actualizado el proyecto correctamente</h3>
            <fieldset className="legendForm">
                    <label name="name">Nombre del proyecto:</label>
                    <input type="text" name="name" onChange={handleChange} className="campoForm" required value={form.name}></input>
                    <label name="description">Descripcion del proyecto:</label>
                    <input type="text" name="description" onChange={handleChange} className="campoForm" required value={form.description}></input>
                    <label name="url">URL del proyecto:</label>
                    <input type="text" name="url" onChange={handleChange} className="campoForm" required value={form.url}></input>
                </fieldset>
                <button type="submit" className="btn">Actualizar proyecto</button>
            </form>
        </div>
    )
}

export default Actualizar
