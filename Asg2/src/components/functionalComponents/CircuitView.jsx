/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AppContext } from "../../F1Context"

/*
 * Returns the clickable circuit name component
 *
 * @props {{
 *  supabase: The supabase object
 *  circuitId: The circuits id
 *  round: The current round number
 *  name: The name of the race (i.e. Bahrain Grand Prix)
 *  className: The list of tailwind classes
 * }}
 * @returns a href to circuit modal
 */
const CircuitView = (props) => {

    // The circuit view will either be on (True) or off (False)
    const { setCircuitView, setCircuit } = useContext(AppContext);

    // Sets the circuit view to on and fetches the circuit data for the modal
    const handleCircuitOpen = () => {
        setTimeout(() => {
            setCircuitView(true);
        }, 150);

        getCircuitData();
    }

    /*
     * Queries supabase to find the corresponding circuit
     *  and sets the circuit useState 
     */
    async function getCircuitData() {
        const { data, err } = await props.supabase
            .from("circuits")
            .select()
            .eq("circuitId", props.circuitId)

        if (err) {
            console.error(err);
            return
        }

        if (!data || data.length === 0) {
            console.error(`${props.circuitId} does not exist in the DB ${err}`);
            return
        }

        setCircuit(data);

    }

    return (
        <a target="_blank"
            rel="noopener noreferrer"
            onClick={handleCircuitOpen}
            className={props.className}
            title="Click to open Circuit View">
            {props.name}
        </a>
    )
}

export default CircuitView;