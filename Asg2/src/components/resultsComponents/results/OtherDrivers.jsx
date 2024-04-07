/* eslint-disable react/prop-types */
const OtherDrivers = (props) => {
    return(
        <tr>
            <td className="text-center">{props.result.positionOrder}.</td>
            <td>{props.result.drivers.forename} {props.result.drivers.surname}</td>
            <td>{props.result.constructors.name}</td>
            <td className="text-center">{props.result.laps}</td>
            <td className="text-center">{props.result.points}</td>
        </tr>
    )
}

export default OtherDrivers;