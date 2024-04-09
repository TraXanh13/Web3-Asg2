/* eslint-disable react/prop-types */

/*
 * Returns the season option component
 * @season: the individual season item
 */
const SeasonOption = (props) => {
    return (
        <option className=" font-medium hover:bg-red-500 bg-transparent" value={props.season.year}>{props.season.year}</option>
    );
}

export default SeasonOption;