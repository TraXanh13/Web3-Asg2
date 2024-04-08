/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AppContext } from "../../F1Context"

const ResultsButton = (props) => {
    const { setView, setQualifying, setResults, setResultsLoading } = useContext(AppContext)

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
            <img src="/images/icons/clipboard.png" title="Results icon" alt="Results icon" className="mr-2"></img>
        </button>
    )
}

export default ResultsButton;