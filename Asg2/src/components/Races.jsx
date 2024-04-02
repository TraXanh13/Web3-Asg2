/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import Race from './Race';

const Races = (props) => {
    // Gets the current season from the params
    const [races, setRaces] = useState([]);
    const {season, asc} = useParams();
    
    useEffect(() => {
        getRaces();
    }, [])
    
    /*
        Fetches the races table from the DB. By default, sorts the table in ascending order
        Looks for the query string /races/:year/:sort
        @sort: Will be dsc for descending
     */
    async function getRaces() {
        const {data, err} = await props.supabase
            .from('races')
            .select()
            .eq("year", season)
            .order("round", {ascending: asc!="dsc"});
        
        if(err){
            console.error(err)
            return
        }
        
        if(!data || data.length === 0){
            console.error(`${season} does not exist in the DB ${err}`)
            return
        }
        
        console.log(data[0]);
        setRaces(data)
    }

    return (
        <div className="border flex flex-col max-w-max px-4 pb-4">
            <h2 className="font-bold text-xl text-center m-8">Races for {season}</h2>
            {races.map((r, indx) => <Race key={indx} race={r}/>)}
        </div>
    );
}

export default Races;