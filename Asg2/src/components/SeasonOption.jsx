const SeasonOption = (props) => {
    return (

        <option value={props.season.year}>{props.season.year}</option>
    );
}

export default SeasonOption;