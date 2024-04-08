import { useContext } from "react"
import { AppContext } from "../../F1Context"


//driverRef, forename, surname

const DriverView = (props) => {
    const { setDriverView, setDriver } = useContext(AppContext);

    const handleDriverOpen = () => {
        setTimeout(() => {
            setDriverView(true);
        }, 150);

        getDriverData();
    }

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
            className="w-40 text-center cursor-pointer"
            onClick={handleDriverOpen}>
            {props.forename} {props.surname}
        </a>
    )
};

export default DriverView;