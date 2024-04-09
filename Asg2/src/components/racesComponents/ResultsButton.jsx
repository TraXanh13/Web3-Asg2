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
const ResultsButton = (props) => {
    /*
     * setView: sets the right side panel between "", results, or standings
     * setQualifying: the list of qualifying races in that season
     * setResults: the list of race results in that season
     * setResultsLoading: flag to show the loader
     */
    const { setView, setQualifying, setResults, setResultsLoading } = useContext(AppContext)

    /*
    * Fetches the relevant data and sets the view to results
    */
    const buttonHandler = () => {
        setView("results");
        setResultsLoading(true);
        fetchResults();
        fetchQualifying();
    }

    /*
    * Returns the drivers in a specific race
    *
    * @raceId: the spefic race that is being checked
    */
    async function fetchResults() {
        const { data, err } = await props.supabase
            .from('results')
            .select(`
                *,
                drivers (*),
                races (*), 
                constructors (*)
            `)
            .eq("raceId", props.raceId)
            .order("positionOrder", { ascending: true });

        if (err) {
            console.error(err)
            return
        }

        if (!data || data.length === 0) {
            console.error(`${props.raceId} does not exist in the DB ${err}`)
            return
        }

        setResults(data)
    }

    /*
    * Returns the drivers the qualifying stage of the race
    *
    * @raceId: the spefic race that is being checked
    */
    async function fetchQualifying() {
        const { data, err } = await props.supabase
            .from('qualifying')
            // Replacing the foreign keys with the specific drivers, races, and constructors info
            .select(`
                qualifyId, number, position, q1, q2, q3, 
                drivers (*),
                races (*), 
                constructors (*)
            `)
            .eq("raceId", props.raceId)

        if (err) {
            console.error(err)
            return
        }

        if (!data || data.length === 0) {
            console.error(`${props.raceId} does not exist in the DB ${err}`)
            return
        }

        setQualifying(data)
    }

    return (
        <button onClick={buttonHandler} >
            <img src="/images/icons/clipboard.png" title="Click to fetch results" alt="Results icon" className="mr-2"></img>
        </button>
    )
}

export default ResultsButton;