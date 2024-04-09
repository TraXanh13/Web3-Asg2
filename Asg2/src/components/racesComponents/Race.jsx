/* eslint-disable react/prop-types */
import ResultsButton from "./ResultsButton";
import StandingsButton from "./StandingsButton";
import CircuitView from "../functionalComponents/CircuitView";

const Race = (props) => {
    return (
        <div className="flex justify-end w-25 pt-0.5 odd:bg-gray-200 even:bg-gray-50">
            <h2 className=" font-barlow-condensed text-lg w-6 cursor-default">{props.race.round}.</h2>
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