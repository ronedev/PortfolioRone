import React from 'react'
import { collection, getDocs, query, where, deleteDoc, doc } from '@firebase/firestore';
import db from './../firebase'

const Admin = (props) => {
    const { proyectos } = props

    const eliminar = async (id) =>{
        await deleteDoc(doc(db, 'proyects', id))
        window.location.reload()
    }

    const btnEliminar = async (e) =>{
        e.preventDefault()
        const id = e.target.value
        const querySnapshot = await getDocs(query(collection(db, 'proyects'), where('id', '==', id)))
        querySnapshot.forEach((doc) =>{
            eliminar(doc.id)
        })
    }

    const btnActualizar = (e)=>{
        const averga = ("/actualizar/:" + e.target.value)
        window.location = averga
    }

    const btnAgregarProyecto = ()=>{
        window.location = "/agregar"
    }

    return (
        <div className="admin">
            <h2 className="titulo">RONE DEV</h2>
            <div className="btnContainer">
                <button className="btn" onClick={btnAgregarProyecto}>Agregar proyecto</button>
            </div>
            <div>
                <table className="proyectos">
                    <thead>
                        <tr>
                            <th className="titulo">Name</th>
                            <th className="titulo">Description</th>
                            <th className="titulo">URL</th>
                        </tr>
                    </thead>

                    <tbody>
                        {proyectos.map((proyecto)=>{
                            return (
                                <tr>
                                    <td>{proyecto.name}</td>
                                    <td>{proyecto.description}</td>
                                    <td>{proyecto.url}</td>
                                    <td>
                                        <button className="btn" onClick={btnEliminar} value={proyecto.id}>Eliminar</button>
                                        <button className="btn" onClick={btnActualizar} value={proyecto.id}>Actualizar</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Admin