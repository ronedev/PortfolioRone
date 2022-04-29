import React, { useState } from 'react'
import mensajesEspañol from 'components/lang/es-AR.json'
import mensajesIngles from 'components/lang/en-US.json'
import { IntlProvider } from 'react-intl'

const langContext = React.createContext()

const LangProvider = ({ children }) => {
    const [mensajeIdioma, setMensajeIdioma] = useState(mensajesIngles)
    const [locale, setLocale] = useState('en-US')

    const cambiarIdioma = (lenguaje) => {
        switch (lenguaje) {
            case 'es-AR':
                setMensajeIdioma(mensajesEspañol)
                setLocale('es-AR')
                break
            case 'en-US':
                setMensajeIdioma(mensajesIngles)
                setLocale('en-US')
                break
            default:
                setMensajeIdioma(mensajesIngles)
                setLocale('en-US')
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