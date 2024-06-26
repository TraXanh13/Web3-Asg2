/* eslint-disable react/prop-types */
import DriverView from "../../functionalComponents/DriverView";
import ConstructorView from "../../functionalComponents/ConstructorView";

/*
 * Returns the table row for a specific qualifying driver
 * 
 * @params{{
 *  results: the results of the race and qualifying
 *  supabase: The supabase object
 * }}
 * 
 * @returns the qualifier data
 */
const Qualifying = (props) => {

    return (
        <tr className="odd:bg-red-200 even:bg-red-50 font-barlow-condensed text-lg font-medium">
            {/* The position */}
            <td className="pl-2 cursor-default">{props.result.position}</td>
            
            {/* The clickable driver name modal */}
            <td className="cursor-default">
                <DriverView supabase={props.supabase}
                    driverRef={props.result.drivers.driverRef}
                    forename={props.result.drivers.forename}
                    surname={props.result.drivers.surname}
                    className="w-40 text-center cursor-pointer hover:text-red-900" />
            </td>

            {/* The clickable constructor modal */}
            <td className="cursor-default">
                <ConstructorView supabase={props.supabase}
                    constructorRef={props.result.constructors.constructorRef}
                    name={props.result.constructors.name}
                    className="w-40 text-center cursor-pointer hover:text-red-900" />
            </td>

            {/* The qualifying times */}
            <td className="cursor-default">{(props.result.q1 != null) ? props.result.q1 : "N/A"}</td>
            <td className="cursor-default">{(props.result.q2 != null) ? props.result.q2 : "N/A"}</td>
            <td className="cursor-default">{(props.result.q3 != null) ? props.result.q3 : "N/A"}</td>
        </tr>
    )
}

export default Qualifying;