import { useContext } from "react"
import { AppContext } from "../../F1Context"
import DriverView from "../functionalComponents/DriverView";

const Driver = (props) => {

    return (
        <tr className="text-left text-lg font-barlow-condensed font-medium animate-fade-right animate-delay-200 animate-ease-in-out odd:bg-red-200 even:bg-red-50">
            <td className="pl-3 cursor-default">
                {props.driver.position}
            </td>

            <td className="text-center pr-6">
                <DriverView supabase={props.supabase}
                    driverRef={props.driver.drivers.driverRef}
                    forename={props.driver.drivers.forename}
                    surname={props.driver.drivers.surname}
                    className="w-40 text-center cursor-pointer hover:text-red-900"
                />
            </td>

            <td className="cursor-default">
                {props.driver.points}
            </td>
            <td className="text-base pl-5 cursor-default">
                {props.driver.wins}
            </td>
        </tr>
    );
}

export default Driver;