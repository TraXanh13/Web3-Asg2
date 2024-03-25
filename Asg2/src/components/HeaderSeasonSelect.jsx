import SeasonOption from "./SeasonOption";

const HeaderSeasonSelect = (props) => {

    const handleChange = (e) => {
        //insert handle code here
    }

    return(
        <select onChange={handleChange}>
            <option hidden={true}>Choose Season</option>
            {props.seasons.map( s => <SeasonOption key={s.year} season ={s}/>)}
        </select>
    )
}

export default HeaderSeasonSelect;