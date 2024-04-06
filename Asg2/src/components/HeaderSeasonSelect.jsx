import SeasonOption from "./SeasonOption.jsx";
import { AppContext } from '../F1Context';
import { useContext } from "react";

const HeaderSeasonSelect = (props) => {

    const { setSeason } = useContext(AppContext);

    const handleChange = (e) => {
        setSeason(e.target.value);

    }

    return (
        <form className="">
            <label htmlFor="raceSeasons" className="block ml-0.5 mb-0.5 text-med font-medium text-gray-900 dark:text-white">Select a season</label>
            <select id="raceSeasons" className="bg-cyan-300  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-0.5 dark:bg-cyan-900  dark:bg-cyan-600  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange}>
                <option hidden={true}>Choose Season</option>
                {props.seasons.map(s => <SeasonOption key={s.year} season={s} />)}
            </select>
        </form>


    )
}

export default HeaderSeasonSelect;