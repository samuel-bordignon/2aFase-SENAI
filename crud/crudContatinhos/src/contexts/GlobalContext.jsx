import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'
const [ContatinhoPremiumPlus, setContatinhoPremiumPlus] = useState('')
const [contatinhos, setContatinhos] = useState([])


    return(
        <GlobalContext.Provider value={{ContatinhoPremiumPlus, setContatinhoPremiumPlus, contatinhos, setContatinhos}}>
           
            {children}
        </GlobalContext.Provider>
    )
}
