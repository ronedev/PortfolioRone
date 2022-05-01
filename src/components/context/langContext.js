import React, { useState } from 'react'
import mensajesEspañol from 'components/lang/es-AR.json'
import mensajesIngles from 'components/lang/en-US.json'
import { IntlProvider } from 'react-intl'

const langContext = React.createContext()

const LangProvider = ({ children }) => {
    let messageDefault
    let localeDefault
    const lang = localStorage.setItem('lang')

    if(lang){
        localeDefault = lang

        if(lang === 'es-AR'){
            messageDefault = mensajesEspañol
        } else if(lang === 'en-US'){
            messageDefault = mensajesIngles
        }else{
            localeDefault = 'en-US'
            messageDefault = mensajesIngles
        }
    }

    const [mensajeIdioma, setMensajeIdioma] = useState(messageDefault)
    const [locale, setLocale] = useState(localeDefault)

    const cambiarIdioma = (lenguaje) => {
        switch (lenguaje) {
            case 'es-AR':
                setMensajeIdioma(mensajesEspañol)
                setLocale('es-AR')
                localStorage.setItem('lang', 'es-AR')
                break
            case 'en-US':
                setMensajeIdioma(mensajesIngles)
                setLocale('en-US')
                localStorage.setItem('lang', 'en-US')
                break
            default:
                setMensajeIdioma(mensajesIngles)
                setLocale('en-US')
                localStorage.setItem('lang', 'en-US')
        }
    }

    return (
        <langContext.Provider value={{ cambiarIdioma: cambiarIdioma }}>
            <IntlProvider locale={locale} messages={mensajeIdioma}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    )
}

export { LangProvider, langContext }