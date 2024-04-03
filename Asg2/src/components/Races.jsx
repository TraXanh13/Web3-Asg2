/* eslint-disable react/prop-types */
import { useState, useEffect, useReducer } from "react";
import {useParams} from 'react-router-dom'
// import {Link} from 'react-router-dom'
import Race from './Race';

const Races = (props) => {
    const {season} = useParams();

    // Gets the current season from the params
    const [races, setRaces] = useState([]);
    const [asc, setAsc] = useState("asc")

    useEffect(() => {
        getRaces();
    }, [])
    
    /*
        Fetches the races table from the DB.
        Looks for the query string /races/:year/:sort
        @sort: Will be asc for ascending
     */
    async function getRaces() {
        const {data, err} = await props.supabase
            .from('races')
            .select()
            .eq("year", season)
            .order("round", {ascending: asc === "asc"});
        
        if(err){
            console.error(err)
            return
        }
        
        if(!data || data.length === 0){
            console.error(`${season} does not exist in the DB ${err}`)
            return
        }
        
        setRaces(data)
    }

    // Changes race state and changes race sort
    function updateRaces () {
        const copy = [...races].reverse();
        
        setRaces(copy);
    }

    return (
        <div className="border flex flex-col max-w-max px-4 pb-4">
            <div className="flex m-8 justify-center relative">
                <h2 className="font-bold text-xl text-center">Races for {season}</h2>
                    <button type="submit" className="absolute right-0 h-6" onClick={updateRaces}>
                        <img src="/images/icons/sort.png" alt="sort icon" title="sort icon" />
                    </button>
            </div>
            {races.map((r, indx) => <Race key={indx} race={r}/>)}
        </div>
    );
}

export default Races;