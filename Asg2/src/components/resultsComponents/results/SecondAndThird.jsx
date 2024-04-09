/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AppContext } from "../../../F1Context"
import SecondAndThirdCards from "./SecondAndThirdCards"

/*
 * Returns the container for the second and third place drivers
 * 
 * @params{{
 *  supabase: The supabase object
 * }}
 */
const SecondAndThird = (props) => {
    // The results of the specific race
    const { results: results } = useContext(AppContext)

    if (results.length > 2) {
        return (
            // <div className="flex flex-col border col-span-3 row-span-3">
            <div className="flex flex-col h-fit m-0">
                <SecondAndThirdCards race={results[1]} medal='🥈' supabase={props.supabase} />
                <SecondAndThirdCards race={results[2]} medal='🥉' supabase={props.supabase} />
            </div>
        )
    }

    // Defaults if there are less that 3 drivers in a race
    return (
        // <div className="flex flex-col border col-span-3 row-span-3">
        <div className="flex flex-col h-1/2 m-0">
            <div className="h-1/2">🥈</div>
            <div className="h-1/2">🥉</div>
        </div>
    )
}

export default SecondAndThird;