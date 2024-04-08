import { useContext } from "react"
import { AppContext } from "../../F1Context"

const Constructor = (props) => {
    const { setConstructorView, setConstructor } = useContext(AppContext);

    const handleConstructorOpen = () => {
        setTimeout(() => {
            setConstructorView(true);
        }, 150);

        getConstructorData();
    }

    async function getConstructorData() {
        const { data, err } = await props.supabase
            .from("constructors")
            .select()
            .eq("constructorRef", props.constructor.constructors.constructorRef)

        if (err) {
            console.error(err)
            return
        }

        if (!data || data.length === 0) {
            console.error(`Constructor with reference: ${props.constructor.constructors.constructorRef} does not exist in the DB ${err}`)
            return
        }

        setConstructor(data);
    }

    return (
        <tr className="text-left text-base">
            <td>
                {props.constructor.position}
            </td>
            {/* Use the a tag for Driver Modal can use onClick */}
            <td>
                <a target="_blank" rel="noopener noreferrer"
                    className="w-40 text-center cursor-pointer"
                    onClick={handleConstructorOpen}>
                    {props.constructor.constructors.name}
                </a>
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