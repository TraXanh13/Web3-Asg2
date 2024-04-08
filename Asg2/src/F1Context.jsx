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

    //The view of the driver popup
    const [driverView, setDriverView] = useState(false);

    //The view of the constructor popup
    const [constructorView, setConstructorView] = useState(false);

    //The view of the circuit popup
    const [circuitView, setCircuitView] = useState(false);

    // The list of drivers, times, and positions in the qualifying stage
    const [qualifying, setQualifying] = useState([]);

    // The list of drivers, times, and positions of the race
    const [results, setResults] = useState([]);

    // The drivers standings after a specific race
    const [driverStandings, setDriverStandings] = useState([]);

    // The constructors standings after a specific race
    const [constructorStandings, setConstructorStandings] = useState([]);

    //The data of a specific driver
    const [driver, setDriver] = useState(null);

    //The data of a specific constructor
    const [constructor, setConstructor] = useState(null);

    //The data of a specific circuit
    const [circuit, setCircuit] = useState(null);

    // The list of races in a season
    const [races, setRaces] = useState([]);

    //This is for loading in the Standings Component
    const [standingsLoading, setStandingsLoading] = useState(true);

    /**
     * The following states are for the Favorites Modal
     */

    //Drivers
    const [favoriteDrivers, setFavoriteDrivers] = useState([]);
    //Constructors
    const [favoriteConstructors, setFavoriteConstructors] = useState([]);
    //Circuits
    const [favoriteCircuits, setFavoriteCircuits] = useState([]);


    return (
        <AppContext.Provider value={{
            loggedIn,
            setLogin,
            season,
            setSeason,
            view,
            setView,
            qualifying,
            setQualifying,
            results,
            setResults,
            driver,
            setDriver,
            constructor,
            setConstructor,
            circuit,
            setCircuit,
            driverStandings,
            setDriverStandings,
            constructorStandings,
            setConstructorStandings,
            races,
            setRaces,

            //views
            favoriteView,
            setFavoriteView,
            driverView,
            setDriverView,
            constructorView,
            setConstructorView,
            circuitView,
            setCircuitView,

            //loading
            standingsLoading,
            setStandingsLoading,

            //favorites
            favoriteDrivers, setFavoriteDrivers,
            favoriteConstructors, setFavoriteConstructors,
            favoriteCircuits, setFavoriteCircuits,
        }}>
            {children}
        </AppContext.Provider>
    )
}
