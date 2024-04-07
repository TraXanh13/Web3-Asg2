/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AppContext } from "../../F1Context"

const StandingsButton = (props) => {
    const { setView, setDriverStandings, setConstructorStandings } = useContext(AppContext)
    
    const buttonHandler = () => {
        setView("standings");
        fetchDriverStandings();
        fetchConstructorStandings();
    }

    /*
    * Returns the drivers standings
    *
    * @raceId: the spefic race that is being checked
    */
    async function fetchDriverStandings() {
        const {data, err} = await props.supabase
            .from('driverStandings')
            // Replacing the foreign keys with the specific drivers, and races info
            .select(`
                driverStandingsId, points, position, positionText, wins,
                drivers (driverRef, code, forename, surname),
                races (name, round, year, date)
            `)
            .eq("raceId", props.raceId)
            .order("position", { ascending: true});
            
        if(err){
            console.error(err)
            return
        }
        
        if(!data || data.length === 0){
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
        const {data, err} = await props.supabase
            .from('constructorStandings')
            // Replacing the foreign keys with the specific drivers, and races info
            .select(`
                constructorStandingsId, points, position, positionText, wins,
                constructors (name, constructorRef, nationality),
                races (name, round, year, date)
            `)
            .eq("raceId", props.raceId)
            .order("position", { ascending: true});
            
        if(err){
            console.error(err)
            return
        }
        
        if(!data || data.length === 0){
            console.error(`${props.raceId} does not exist in the DB ${err}`)
            return
        }

        setConstructorStandings(data)
    }

    return(
        <button onClick={buttonHandler} >
            <img src="/images/icons/podium.png" title="Results icon" alt="Standings icon" className="mr-2"></img>
        </button>
    )
}

export default StandingsButton;