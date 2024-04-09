/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AppContext } from "../../F1Context"


/*
 * Returns the clickable driver component
 *
 * @props {{
 *  supabase: The supabase object
 *  driverRef: The drivers reference name
 *  forename: The drivers firstname
 *  surname: The drivers lastname
 *  className: The list of tailwind classes
 * }}
 * 
 * @returns a href to driver modal
 */
const DriverView = (props) => {
    // The driverView (T/F), individual driver useState
    const { setDriverView, setDriver } = useContext(AppContext);

    // Sets the driverView to true and fetches the driver data
    const handleDriverOpen = () => {
        setTimeout(() => {
            setDriverView(true);
        }, 150);

        getDriverData();
    }

    /*
     * Queries supabase to find the corresponding driver
     *  and sets the driver useState 
     */
    async function getDriverData() {
        const { data, err } = await props.supabase
            .from("drivers")
            .select()
            .eq("driverRef", props.driverRef)

        if (err) {
            console.error(err)
            return
        }

        if (!data || data.length === 0) {
            console.error(`Driver with reference: ${props.driverRef} does not exist in the DB ${err}`)
            return
        }

        setDriver(data);
    }

    return (
        <a target="_blank" rel="noopener noreferrer"
            className={props.className}
            onClick={handleDriverOpen}>
            {props.forename} {props.surname}
        </a>
    )
};

export default DriverView;