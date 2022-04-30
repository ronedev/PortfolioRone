import { Send } from '@material-ui/icons'
import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Alert } from '@mui/material'
import emailjs from 'emailjs-com'
import cv from 'docs/cv.pdf'

const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [errorAlert, setErrorAlert] = useState(false)
    const [successAlert, setSuccessAlert] = useState(false)
    const [errors, setErrors] = useState({})

    const formSubmit = (e) => {
        let errors = {}
        e.preventDefault()
        if (!form.name) {
            errors.name = 'error.noName'
        } else if (form.name.length <= 1) {
            errors.name = 'error.noCompletedName'
        } else {
            if (!form.email) {
                errors.name = 'error.noEmail'
            } else if (!form.email.includes('@')) {
                errors.name = 'error.emailNoValid'
            } else {
                if (!form.message) {
                    errors.name = 'error.noMessage'
                }
            }
        }

        if (Object.keys(errors).length === 0) {
            emailjs.send('service_d6lvtwa', 'template_8m100ek', form, 'user_yMxUnXcSQydFCz1BUjsmB')
                .then((result) => {
                    setSuccessAlert(true)
                }, (error) => {
                })
        } else {
            setErrors(errors)
            setErrorAlert(true)
        }
    }

    return (
        <section className='contactSection' id='contact'>
            <div className='contactDescription'>
                <button className='btn1'>
                    <FormattedMessage
                        id='contact.btnPrimary'
                        defaultMessage='Contact me'
                    />
                </button>
                <h2>
                    <FormattedMessage
                        id='contact.title'
                        defaultMessage="Let's star a project together"
                    />
                </h2>
                <p>
                    <FormattedMessage
                        id='contact.description'
                        defaultMessage='Interested in working together? Contact me without commitment. I pay for the coffee'
                    />
                </p>
                <button className='btn2'>
                    <a href={cv} target='_blank' rel='noopener noreferrer' download={cv} >
                        <FormattedMessage
                            id='contact.btnDownload'
                            defaultMessage='Download CV'
                        />
                    </a>
                </button>
            </div>
            <form className='contactForm'>
                <div className='inputContainer'>
                    <TextField variant='outlined' fullWidth label='Name' name='name' required onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                    <TextField variant='outlined' fullWidth label='Email' name='email' type='email' required onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                </div>
                <div className='inputContainer'>
                    <TextField id='message' fullWidth variant='outlined' label='Message' name='message' required onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                </div>
                {errorAlert && <>
                    <Alert severity='error' onClick={() => setErrorAlert(false)}>
                        <FormattedMessage
                            id={errors.name}
                            defaultMessage='Error message'
                        />
                    </Alert>
                </>}
                {successAlert && <>
                    <Alert severity='success' onClick={() => setSuccessAlert(false)}>¡Gracias por contactarme!</Alert>
                </>}
                <Button id='btnSubmit' variant='contained' endIcon={<Send />} type='submit' onClick={(e) => formSubmit(e)}>
                    <FormattedMessage
                        id='contact.btnSend'
                        defaultMessage='Send'
                    />
                </Button>
            </form>
        </section>
    )
}

export default Contact