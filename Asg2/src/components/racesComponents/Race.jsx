/* eslint-disable react/prop-types */
import { useContext } from "react";
import ResultsButton from "./ResultsButton";
import StandingsButton from "./StandingsButton";
import { AppContext } from "../../F1Context";

const Race = (props) => {
    const { setCircuitView, setCircuit } = useContext(AppContext);

    const handleCircuitOpen = () => {
        setTimeout(() => {
            setCircuitView(true);
        }, 150);

        getCircuitData();
    }

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

    async function getCircuitData() {
        const { data, err } = await props.supabase
            .from("circuits")
            .select()
            .eq("circuitId", props.race.circuitId)

        if (err) {
            console.error(err);
            return
        }

        if (!data || data.length === 0) {
            console.error(`${props.race.circuitId} does not exist in the DB ${err}`);
            return
        }

        setCircuit(data);
    }


    return (
        <div className="flex justify-between">
            <a target="_blank"
                rel="noopener noreferrer"
                onClick={handleCircuitOpen}
                className="min-w-52 cursor-pointer">
                {props.race.round}. {props.race.name}
            </a>
            <div className="mx-12"> {convertDate(props.race.date)}</div>
            <div className="flex overflow-hidden whitespace-nowrap">
                <ResultsButton raceId={props.race.raceId} supabase={props.supabase} />
                <StandingsButton raceId={props.race.raceId} supabase={props.supabase} />
            </div>
        </div>
    );
}

export default Race;