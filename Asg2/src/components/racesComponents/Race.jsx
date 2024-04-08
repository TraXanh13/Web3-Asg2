/* eslint-disable react/prop-types */
import ResultsButton from "./ResultsButton";
import StandingsButton from "./StandingsButton";
import CircuitView from "../functionalComponents/CircuitView";

const Race = (props) => {

    function convertDate(date) {
        const month = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar",
            "04": "Apr",
            "05": "May",
            "06": "Jun",
            "07": "Jul",
            "08": "Aug",
            "09": "Sep",
            "10": "Oct",
            "11": "Nov",
            "12": "Dec"
        }

        return (`${month[date.substring(5, 7)]} ${date.substring(8)}`)
    }

    return (
        <div className="flex justify-end w-25 pt-0.5 odd:bg-gray-200 even:bg-gray-50">
            <h2 className=" font-barlow-condensed text-lg w-6">{props.race.round}.</h2>
            <CircuitView
                supabase={props.supabase}
                circuitId={props.race.circuitId}
                round={props.race.round}
                name={props.race.name}
                className="min-w-52 cursor-pointer text-left font-barlow-condensed text-xl"
            />
            <div className="flex overflow-hidden whitespace-nowrap">
                <ResultsButton raceId={props.race.raceId} supabase={props.supabase} />
                <StandingsButton raceId={props.race.raceId} supabase={props.supabase} />
            </div>
        </div>
    );
}

export default Race;