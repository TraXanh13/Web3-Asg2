/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const AppContext = createContext();

export const F1Context = ({children}) => {
    const [loggedIn, setLogin] = useState(false)
    const [season, setSeason] = useState(2023);
    const [driver, setDriver] = useState([]);
    const [races, setRaces] = useState([]);

    return (
        <AppContext.Provider value={{
            loggedIn,
            setLogin,
            season,
            setSeason,
            races,
            setRaces,
            driver,
            setDriver
        }}>
            {children}
        </AppContext.Provider>
    )
}