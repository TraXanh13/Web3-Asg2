import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import Race from './Race';

const Races = (props) => {
    // Gets the current season from the params
    const [races, setRaces] = useState([]);
    const {season} = useParams()
    
    useEffect(() => {
        getRaces();
    }, [])
    
    async function getRaces(req, res) {
        // eslint-disable-next-line react/prop-types
        const {data, err} = await props.supabase
            // eslint-disable-next-line react/prop-types
            .from('races')
            .select()
            .eq("year", season);
        
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

    return (
        <div className="border flex flex-col max-w-max px-4">
            <h2 className="font-bold text-xl text-center m-8">Races for {season}</h2>
            {races.map((r, indx) => <Race key={indx} index={indx+1} race={r}/>)}
        </div>
    );
}

export default Races;