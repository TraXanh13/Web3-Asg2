import { useState } from "react";
import SeasonOption from "./SeasonOption.jsx";

const HeaderSeasonSelect = (props) => {

    const [season, setSeason] = useState('');

    const handleChange = (e) => {
        setSeason(e.target.value);

    }

    return (
        <select onChange={handleChange}>
            <option hidden={true}>Choose Season</option>
            {props.seasons.map(s => <SeasonOption key={s.year} season={s} />)}
        </select>
    )
}

export default HeaderSeasonSelect;