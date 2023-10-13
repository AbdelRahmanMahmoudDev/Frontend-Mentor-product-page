import {createContext, useState, useContext} from "react"

const MobileMenuContext = createContext(undefined)

export const MobileMenuProvider = ({children}) => {
    const [menu, setMenu] = useState(false)
    return <MobileMenuContext.Provider value={{menu, toggleMenu: () => setMenu(!menu)}}>{children}</MobileMenuContext.Provider>
}

export const useMobileMenuContext = () => useContext(MobileMenuContext)