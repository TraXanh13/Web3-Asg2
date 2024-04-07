/* eslint-disable react/prop-types */
const Qualifying = (props) => {
    
    return(
        <tr>
            <td>{props.result.position}.</td>
            <td>{props.result.drivers.forename} {props.result.drivers.surname}</td>
            <td>{props.result.constructors.name}</td>
            <td>{props.result.q1}</td>
            <td>{props.result.q2}</td>
            <td>{props.result.q3}</td>
        </tr>
    )
}

export default Qualifying;