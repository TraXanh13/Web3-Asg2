/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const AppContext = createContext();

export const F1Context = ({ children }) => {
    // Login state: true for logged in
    const [loggedIn, setLogin] = useState(false);

    // The current season selected
    const [season, setSeason] = useState(2023);

    // The view for standing, results, or none selected
    const [view, setView] = useState("none");

    //The view of the favorites popup
    const [favoriteView, setFavoriteView] = useState(false);

    // The list of drivers, times, and positions in the qualifying stage
    const [qualifyingData, setQualifyingData] = useState([]);

    // The list of drivers, times, and positions of the race
    const [resultsData, setResultsData] = useState([]);

    // The drivers standings after a specific race
    const [driverStandings, setDriverStandings] = useState([]);

    // The constructors standings after a specific race
    const [constructorStandings, setConstructorStandings] = useState([]);

    // The individual driver selected
    const [selectedDriver, setSelectedDriver] = useState([]);

    // The list of races in a season
    const [races, setRaces] = useState([]);

    //This is a view for testing
    const [testView, setTestView] = useState(false);

    return (
        <AppContext.Provider value={{
            loggedIn,
            setLogin,
            season,
            setSeason,
            view,
            setView,
            favoriteView,
            setFavoriteView,
            qualifyingData,
            setQualifyingData,
            resultsData,
            setResultsData,
            driverStandings,
            setDriverStandings,
            constructorStandings,
            setConstructorStandings,
            selectedDriver,
            setSelectedDriver,
            races,
            setRaces,

            //testing states
            testView,
            setTestView,

        }}>
            {children}
        </AppContext.Provider>
    )
}
