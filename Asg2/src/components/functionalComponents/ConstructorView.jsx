/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AppContext } from "../../F1Context"

/*
 * Returns the clickable constructor name component
 *
 * @props {{
 *  supabase: The supabase object
 *  constructorRef: The constructors reference name
 *  name: The constructor name
 *  className: The list of tailwind classes
 * }}
 * 
 * @returns a href to constructor modal
 */
const ConstructorView = (props) => {
    
    // The constructorView (T/F), individual constructor useState
    const { setConstructorView, setConstructor } = useContext(AppContext);

    // Sets the constructorView to true and fetches data
    const handleConstructorOpen = () => {
        setTimeout(() => {
            setConstructorView(true);
        }, 150);

        getConstructorData();
    }

    /*
     * Queries supabase to find the corresponding constructor
     *  and sets the constructor useState 
     */
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
            className={props.className}
            onClick={handleConstructorOpen}>
            {props.name}
        </a>
    )
}

export default ConstructorView;