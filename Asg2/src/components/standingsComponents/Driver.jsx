import { useContext } from "react"
import { AppContext } from "../../F1Context"

const Driver = (props) => {
    const { setTestView, setDriver } = useContext(AppContext);

    const handleDriverOpen = () => {
        setTimeout(() => {
            setTestView(true);
        }, 150);

        getDriverData();
    }

    async function getDriverData() {
        const { data, err } = await props.supabase
            .from("drivers")
            .select()
            .eq("driverRef", props.driver.drivers.driverRef)

        if (err) {
            console.error(err)
            return
        }

        if (!data || data.length === 0) {
            console.error(`Driver with reference: ${props.driver.drivers.driverRef} does not exist in the DB ${err}`)
            return
        }

        setDriver(data);
    }

    return (
        <tr className="text-left text-base">
            <td>
                {props.driver.position}
            </td>
            {/* Use the a tag for Driver Modal can use onClick */}
            <td>
                <a target="_blank" rel="noopener noreferrer"
                    className="w-40 text-center cursor-pointer"
                    onClick={handleDriverOpen}>
                    {props.driver.drivers.forename} {props.driver.drivers.surname}
                </a>
            </td>

            <td>
                {props.driver.points}
            </td>
            <td className="text-base px-4 mx-8">
                {props.driver.wins}
            </td>
        </tr>
    );
}

export default Driver;