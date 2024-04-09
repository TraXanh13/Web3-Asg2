import ConstructorView from "../functionalComponents/ConstructorView";

const Constructor = (props) => {

    return (
        <tr className="text-left text-xl font-barlow-condense font-medium  odd:bg-red-200 even:bg-red-50 animate-delay-100 animate-ease-in-out">
            <td className="pl-3 cursor-default">
                {props.constructor.position}
            </td>
            {/* Use the a tag for Driver Modal can use onClick */}
            <td className="text-center pr-6">
                <ConstructorView supabase={props.supabase}
                    constructorRef={props.constructor.constructors.constructorRef}
                    name={props.constructor.constructors.name} />
            </td>

            <td className="cursor-default">
                {props.constructor.points}
            </td>
            <td className="text-base pl-5 cursor-default">
                {props.constructor.wins}
            </td>
        </tr>
    );
}

export default Constructor;