/* eslint-disable react/prop-types */
import ResultsButton from "./ResultsButton";
import StandingsButton from "./StandingsButton";
import CircuitView from "../functionalComponents/CircuitView";

/*
 * Returns the individual race
 *
 * @props {{
 *  race: The individual race object
 *  supabase: The supabase object
 * }}
 * 
 * @returns div containing the specific race and buttons
 */
const Race = (props) => {
    
    return (
        <div className="flex justify-end w-25 pt-0.5 odd:bg-gray-200 even:bg-gray-50">
            <h2 className=" font-barlow-condensed text-lg w-6 cursor-default">{props.race.round}.</h2>
            {/* The clickable circuit name to open a modal */}
            <CircuitView
                supabase={props.supabase}
                circuitId={props.race.circuitId}
                round={props.race.round}
                name={props.race.name}
                className="min-w-52 cursor-pointer text-left font-barlow-condensed text-xl hover:text-red-900"
            />
            <div className="flex overflow-hidden whitespace-nowrap">
                <ResultsButton raceId={props.race.raceId} supabase={props.supabase} />
                <StandingsButton raceId={props.race.raceId} supabase={props.supabase} />
            </div>
        </div>
    );
}

export default Race;