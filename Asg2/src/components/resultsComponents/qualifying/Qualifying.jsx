/* eslint-disable react/prop-types */
import DriverView from "../../functionalComponents/DriverView";
import ConstructorView from "../../functionalComponents/ConstructorView";
const Qualifying = (props) => {

    return (
        <tr>
            <td>{props.result.position}.</td>
            <td><DriverView supabase={props.supabase}
                driverRef={props.result.drivers.driverRef}
                forename={props.result.drivers.forename}
                surname={props.result.drivers.surname} />
            </td>
            <td>
                <ConstructorView supabase={props.supabase}
                    constructorRef={props.result.constructors.constructorRef}
                    name={props.result.constructors.name} />
            </td>
            <td>{props.result.q1}</td>
            <td>{props.result.q2}</td>
            <td>{props.result.q3}</td>
        </tr>
    )
}

export default Qualifying;