import { useContext } from "react"
import { AppContext } from "../../F1Context"
import ConstructorView from "../functionalComponents/ConstructorView";

const Constructor = (props) => {

    return (
        <tr className="text-left text-base">
            <td>
                {props.constructor.position}
            </td>
            {/* Use the a tag for Driver Modal can use onClick */}
            <td>
                <ConstructorView supabase={props.supabase}
                    constructorRef={props.constructor.constructors.constructorRef}
                    name={props.constructor.constructors.name} />
            </td>

            <td>
                {props.constructor.points}
            </td>
            <td className="text-base px-4 mx-8">
                {props.constructor.wins}
            </td>
        </tr>
    );
}

export default Constructor;