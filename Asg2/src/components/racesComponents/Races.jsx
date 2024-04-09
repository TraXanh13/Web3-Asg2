/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { AppContext } from '../../F1Context';
import Race from './Race';
import { GoSortDesc } from "react-icons/go";
import { GoSortAsc } from "react-icons/go";

/*
 * Container for all of the races in a specific season
 * @props {{
 *  supabase: The supabase object
 * }}
 * 
 * @returns a div containing all of the races in a specific season
 */
const Races = (props) => {
    /*
     * season: the current year selected
     * races: the list of races in that season
     */
    const { season, races, setRaces } = useContext(AppContext);

    // Flag to identify if the list is descending or ascending
    const [isDescending, setIsDescending] = useState(true);

    useEffect(() => {
        getRaces();
    }, []);

    useEffect(() => {
        getRaces();
    }, [season]);

    /*
        Fetches the races table from the DB.
        Looks for the query string /races/:year/:sort
        @sort: Will be asc for ascending
    */
    async function getRaces() {
        const { data, err } = await props.supabase
            .from("races")
            .select(`
                *,
                circuits(*)
            `)
            .eq("year", season)
            .order("round")

        if (err) {
            console.error(err)
            return
        }

        if (!data || data.length === 0) {
            console.error(`${season} does not exist in the DB ${err}`)
            return
        }

        setRaces(data)
    }

    // Changes race state and changes race sort
    function updateRaces() {
        const copy = [...races].reverse();

        setRaces(copy);

        setIsDescending(!isDescending);
    }

    return (
        <div className="flex flex-col min-w-max pl-4 my-8 overflow-y-auto no-scrollbar">
            {/* Heading for the races section */}
            <div className="flex p-4 justify-between sticky top-0 bg-gray-700 z-8">
                <h2 className="font-bold text-2xl text-center text-gray-50 font-montserrat cursor-default self-center">Races for {season}</h2>
                {/* Sort button */}
                <button type="submit" onClick={updateRaces}>
                    {isDescending ? <GoSortDesc style={{ color: 'white', fontSize: '40px' }} /> : <GoSortAsc style={{ color: 'white', fontSize: '40px' }} />}
                </button>
            </div>
            {/* Maps the list of races to create individual components */}
            {races.map((r, indx) => <Race key={indx} race={r} supabase={props.supabase} />)}
        </div>
    );
}

export default Races;