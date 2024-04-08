import ConstructorView from "../functionalComponents/ConstructorView";

const Constructor = (props) => {

    return (
        <tr className="text-left text-base odd:bg-red-200 even:bg-red-50 animate-delay-200 animate-ease-in-out">
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