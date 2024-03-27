import { useState } from "react";
import SeasonOption from "./SeasonOption";
import { FormControl, InputLabel, Select } from "@mui/material";

const HeaderSeasonSelect = (props) => {

    const [season, setSeason] = useState("");

    const handleChange = (e) => {
        //insert handle code here
        setSeason(e.target.value);

    }

    return (
        // <FormControl sx={{ m: 2, minWidth: 180 }}>
        //     <InputLabel id="season-label">Choose Season</InputLabel>
        //     <Select
        //         labelId="season-label"
        //         id="season-select"
        //         value={season}
        //         autoWidth
        //         label="Choose Season"
        //         onChange={handleChange}
        //     >
        //         {props.seasons.map(s => <SeasonOption key={s.year} season={s} />)}
        //     </Select>
        // </FormControl>

        <div>
            <h2>Season</h2>
            <select onChange={handleChange}>
                <option hidden={true}>Choose Season</option>
                {props.seasons.map(s => <SeasonOption key={s.year} season={s} />)}
            </select>
        </div>

    )
}

export default HeaderSeasonSelect;