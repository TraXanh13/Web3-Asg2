import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Box } from "@mui/system";

const HeaderSeasonSelect = (props) => {

    const [season, setSeason] = useState(''); 

    const handleChange = (e) => {

        const selectedSeason = e.target.value;

        setSeason(selectedSeason);

        console.log(season);

    }

    return (
        <Box>
        <FormControl sx={{ m: 2, minWidth: 180 }}>
            <InputLabel id="season-label">Choose Season</InputLabel>
            <Select
                labelId="season-label"
                id="season-select"
                value={season}
                autoWidth
                label="Choose Season"
                onChange={handleChange}
            >
                {props.seasons.map((s, indx) => 
                    <MenuItem key={indx} value={s.year}>{s.year}</MenuItem>
                )}
            </Select>
        </FormControl>
        </Box>
    )
}

export default HeaderSeasonSelect;