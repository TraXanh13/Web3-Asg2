/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AppContext } from "../../F1Context"

/*
 * Button component to set results useState
 *
 * @props {{
 *  raceId: The identifier for a specific race
 *  supabase: The supabase object
 * }}
 * 
 * @returns the results button
 */
const StandingsButton = (props) => {
    /*
     * setView: sets the right side panel between "", results, or standings
     * setDriverStandings: the list of drivers standing in that season
     * setConstructorStandings: the list of constructor standings in that season
     * setStandingsLoading: flag to show the loader
     */
    const { setView, setDriverStandings, setConstructorStandings, setStandingsLoading } = useContext(AppContext)

    /*
    * Fetches the relevant data and sets the view to standings
    */
    const buttonHandler = () => {
        setView("standings");
        setStandingsLoading(true);
        fetchDriverStandings();
        fetchConstructorStandings();
    }

    /*
    * Returns the drivers standings
    *
    * @raceId: the spefic race that is being checked
    */
    async function fetchDriverStandings() {
        const { data, err } = await props.supabase
            .from('driverStandings')
            // Replacing the foreign keys with the specific drivers, and races info
            .select(`
                driverStandingsId, points, position, positionText, wins,
                drivers (driverRef, code, forename, surname),
                races (name, round, year, date)
            `)
            .eq("raceId", props.raceId)
            .order("position", { ascending: true });

        if (err) {
            console.error(err)
            return
        }

        if (!data || data.length === 0) {
            console.error(`${props.raceId} does not exist in the DB ${err}`)
            return
        }

        setDriverStandings(data)
    }

    /*
    * Returns the constructor standings
    *
    * @raceId: the spefic race that is being checked
    */
    async function fetchConstructorStandings() {
        const { data, err } = await props.supabase
            .from('constructorStandings')
            // Replacing the foreign keys with the specific drivers, and races info
            .select(`
                *, constructors (*), races (*)
            `)
            .eq("raceId", props.raceId)
            .order("position", { ascending: true });

        if (err) {
            console.error(err)
            return
        }

        if (!data || data.length === 0) {
            console.error(`${props.raceId} does not exist in the DB ${err}`)
            return
        }

        setConstructorStandings(data)
    }

    return (
        <button onClick={buttonHandler} >
            <img src="/images/icons/podium.png" title="Click to fetch standings" alt="Standings icon" className="mr-2"></img>
        </button>
    )
}

export default StandingsButton;