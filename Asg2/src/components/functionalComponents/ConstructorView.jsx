import { useContext } from "react"
import { AppContext } from "../../F1Context"

//constructorRef name nationality
const ConstructorView = (props) => {

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
            .eq("constructorRef", props.constructorRef)

        if (err) {
            console.error(err)
            return
        }

        if (!data || data.length === 0) {
            console.error(`Constructor with reference: ${props.constructorRef} does not exist in the DB ${err}`)
            return
        }

        setConstructor(data);
    }

    return (
        <a target="_blank" rel="noopener noreferrer"
            className="w-40 text-center cursor-pointer hover:text-red-900"
            onClick={handleConstructorOpen}>
            {props.name}
        </a>
    )
}

export default ConstructorView;