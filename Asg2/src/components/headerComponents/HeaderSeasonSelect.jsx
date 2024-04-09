/* eslint-disable react/prop-types */
import SeasonOption from "./SeasonOption.jsx";
import { AppContext } from '../../F1Context.jsx';
import { useContext} from "react";

/*
 * Returns the select menu with all of the seasons
 */
const HeaderSeasonSelect = (props) => {

    const { setSeason, setView } = useContext(AppContext);

    // Sets the season to the current select option
    const handleChange = (e) => {
        setSeason(e.target.value);
        setView("none");
    }

    return (
        <div className="flex items-center">
            <select className=" font-montserrat font-bold ml-3 flex w-40  items-center rounded-sm border-0 border-b-2 border-solid border-red-500 bg-transparent px-0 py-1 text-lg tracking-wider focus:border-b-orange-600 focus:outline-none focus:ring-orange-600 focus:text-red-900" onChange={handleChange}>
                <option hidden={true}>2023</option>
                {props.seasons.map(s => <SeasonOption key={s.year} season={s} />)}
            </select>
        </div>

    )
}

export default HeaderSeasonSelect;