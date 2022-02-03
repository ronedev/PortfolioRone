import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Contacto = () => {
    const [form, setForm] = useState({
        name: '',
        tel: '',
        email: '',
        message: '',
        send: false
    })

    const [alert, setAlert] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
        console.log(form)
    }

    const resetForm = () => {
        document.documentElement.style.overflowY="visible"
        setForm({
            name: '',
            tel: '',
            email: '',
            message: '',
            send: false
        })
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 3000);
    }

    const formSubmit = (e) => {
        e.preventDefault();

        console.log(e.target)
        setForm({...form, send: true})

        emailjs.sendForm('service_d6lvtwa', 'template_8m100ek', e.target, 'user_yMxUnXcSQydFCz1BUjsmB')
            .then((result) => {
                console.log(result.text);
                resetForm()
            }, (error) => {
                console.log(error.text);
            })

    }
    return (
        <div className="contacto" id="contacto">
            <h2 className="titulo">CONTACTO</h2>
            <form onSubmit={formSubmit} className="contactForm">
                <fieldset className="legendForm">
                    <h3 className={alert ? 'titulo active' : 'loading'}>Mensaje enviado correctamente</h3>
                    <label name="name">Nombre:</label>
                    <input type="text" name="name" onChange={handleChange} className="campoForm" required value={form.name}></input>
                    <label name="tel">Telefono:</label>
                    <input type="tel" name="tel" onChange={handleChange} className="campoForm" required value={form.tel}></input>
                    <label name="email">Email:</label>
                    <input type="email" name="email" onChange={handleChange} className="campoForm" required value={form.email}></input>
                    <label name="message">Mensaje:</label>
                    <textarea aria-label="minimum height" className="campoForm" name="message" onChange={handleChange} value={form.message}/>
                </fieldset>
                <button type="submit" className="btn">Enviar</button>
            </form>
            <div className={form.send ? 'loading active' : 'loading'}>
                <span className="loader"><span className="loader-inner"></span></span>
            </div>
        </div>
    )
}

export default Contacto
