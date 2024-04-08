import SeasonOption from "./SeasonOption.jsx";
import { AppContext } from '../../F1Context.jsx';
import { useContext, Fragment, useState } from "react";
import { Listbox } from "@headlessui/react";

const HeaderSeasonSelect = (props) => {

    const { setSeason, setView } = useContext(AppContext);

    const handleChange = (e) => {
        setSeason(e.target.value);
        setView("none");
    }

    return (
        <div className="flex items-center">
            <select className="flex items-center ml-3 w-40 border-solid border-red-500 border-0 border-b-2 bg-transparent px-0 py-1 text-lg tracking-wider" onChange={handleChange}>
                <option hidden={true}>2023</option>
                {props.seasons.map(s => <SeasonOption key={s.year} season={s} />)}
            </select>
        </div>

    )
}

export default HeaderSeasonSelect;