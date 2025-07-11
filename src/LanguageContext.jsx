import { createContext, useState, useContext } from "react"

const LanguageContext = createContext()


export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("rus")

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage=()=>useContext(LanguageContext)