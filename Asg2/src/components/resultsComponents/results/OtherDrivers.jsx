/* eslint-disable react/prop-types */
import DriverView from "../../functionalComponents/DriverView";
import ConstructorView from "../../functionalComponents/ConstructorView";
const OtherDrivers = (props) => {
    console.log(props.result);
    return (
        <tr>
            <td className="text-center">{props.result.positionOrder}.</td>
            <td>
                <DriverView
                    supabase={props.supabase}
                    driverRef={props.result.drivers.driverRef}
                    forename={props.result.drivers.forename}
                    surname={props.result.drivers.surname} />
            </td>
            <td>
                <ConstructorView supabase={props.supabase}
                    constructorRef={props.result.constructors.constructorRef}
                    name={props.result.constructors.name} />
            </td>
            <td className="text-center">{props.result.laps}</td>
            <td className="text-center">{props.result.points}</td>
        </tr>
    )
}

export default OtherDrivers;