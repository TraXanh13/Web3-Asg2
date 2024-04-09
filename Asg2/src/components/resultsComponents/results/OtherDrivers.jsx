/* eslint-disable react/prop-types */
import DriverView from "../../functionalComponents/DriverView";
import ConstructorView from "../../functionalComponents/ConstructorView";
const OtherDrivers = (props) => {
    return (
        <tr className="text-lg font-medium">
            <td className="text-center">{props.result.positionOrder}</td>
            <td>
                <DriverView
                    supabase={props.supabase}
                    driverRef={props.result.drivers.driverRef}
                    forename={props.result.drivers.forename}
                    surname={props.result.drivers.surname}
                    className="w-40 text-center cursor-pointer hover:text-red-900" />
            </td>
            <td>
                <ConstructorView supabase={props.supabase}
                    constructorRef={props.result.constructors.constructorRef}
                    name={props.result.constructors.name}
                    className="w-40 text-center cursor-pointer hover:text-red-900" />
            </td>
            <td className="text-center">{props.result.laps}</td>
            <td className="text-center">{props.result.points}</td>
        </tr>
    )
}

export default OtherDrivers;