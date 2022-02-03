import React, { useState } from 'react'
import { Route, Router, Switch } from 'react-router'
import Admin from './Admin'


const Login = (props) => {
    const [auth, setAuth] = useState(false)
    const [form, setForm] = useState({
        name: '',
        contraseña: '',
    })

    const [alert, setAlert] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
        console.log(form)
    }
    const resetForm = () => {
        document.documentElement.style.overflowY = "visible"
        setForm({
            name: '',
            contraseña: ''
        })
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 3000);
    }

    const login = (e) => {
        e.preventDefault()
        if (form.name === 'agustinvera2589' && form.contraseña === '250899230718') {
            setAuth(true)
            window.location = '/admin'
        } else {
            resetForm();
        }
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin" render={() => {
                    return auth ? <Admin /> :
                        <div className="contenedorCentrado">
                            <form className="contactForm" onSubmit={login}>
                                <h3 className={alert ? 'titulo active' : 'loading'}>Nombre de usuario o contraseña incorrecto</h3>
                                <fieldset className="legendForm">
                                    <label name="name">Nombre de usuario:</label>
                                    <input type="text" name="name" onChange={handleChange} className="campoForm" required value={form.name}></input>
                                    <label name="contraseña">Contraseña:</label>
                                    <input type="password" name="contraseña" onChange={handleChange} className="campoForm" required value={form.contraseña}></input>
                                </fieldset>
                                <button type="submit" className="btn">Ingresar</button>
                            </form>
                        </div>
                }}>
                </Route>
            </Switch>
        </Router>
    )
}

export default Login
