/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const AppContext = createContext();

export const F1Context = ({children}) => {
    // Login state: true for logged in
    const [loggedIn, setLogin] = useState(false);

    // The current season selected
    const [season, setSeason] = useState(2023);

    // The view for standing, results, or none selected
    const [view, setView] = useState("none");

    // The list of drivers, times, and positions in the qualifying stage
    const [qualifying, setQualifying] = useState([]);

    // The list of drivers, times, and positions of the race
    const [results, setResults] = useState([]);

    // The drivers standings after a specific race
    const [driverStandings, setDriverStandings] = useState([]);
    
    // The constructors standings after a specific race
    const [constructorStandings, setConstructorStandings] = useState([]);

    // The individual driver selected
    const [selectedDriver, setSelectedDriver] = useState([]);

    // The list of races in a season
    const [races, setRaces] = useState([]);

    return (
        <AppContext.Provider value={{
            loggedIn,
            setLogin,
            season,
            setSeason,
            view, 
            setView,
            qualifying: qualifying,
            setQualifying: setQualifying,
            results: results,
            setResults: setResults,
            driverStandings,
            setDriverStandings,
            constructorStandings,
            setConstructorStandings,
            selectedDriver,
            setSelectedDriver,
            races,
            setRaces
        }}>
            {children}
        </AppContext.Provider>
    )
}