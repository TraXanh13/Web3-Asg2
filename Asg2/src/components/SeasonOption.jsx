import { MenuItem } from "@mui/material";

const SeasonOption = (props) => {
    return (
        //<MenuItem value={props.season.year}>{props.season.year}</MenuItem>

        <option value={props.season.year}>{props.season.year}</option>
    );
}

export default SeasonOption;