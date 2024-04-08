import { useContext } from "react"
import { AppContext } from "../../F1Context"
import DriverView from "../functionalComponents/DriverView";

const Driver = (props) => {

    return (
        <tr className="text-left text-base animate-fade-right animate-delay-200 animate-ease-in-out">
            <td>
                {props.driver.position}
            </td>

            <td>
                <DriverView supabase={props.supabase}
                    driverRef={props.driver.drivers.driverRef}
                    forename={props.driver.drivers.forename}
                    surname={props.driver.drivers.surname} />
            </td>

            <td>
                {props.driver.points}
            </td>
            <td className="text-base px-4 mx-8">
                {props.driver.wins}
            </td>
        </tr>
    );
}

export default Driver;