import { useContext } from "react"
import { AppContext } from "../../../F1Context"
import DriverView from "../../functionalComponents/DriverView"
import ConstructorView from "../../functionalComponents/ConstructorView"

const Winner = (props) => {
    const { results: results } = useContext(AppContext)

    let url = `http://purecatamphetamine.github.io/country-flag-icons/3x2/${results[0].drivers.countryCode}.svg`;
    let isEmpty = false;

    if (results[0].fastestLapTime == null) {
        isEmpty = true;
    }


    console.log(results[0].fastestLapTime);

    if (results.length > 0) {
        return (
            // <div className="relative border col-span-3 row-span-10 bg-cover bg-center">
            <div className="relative w-1/2 items-stretch m-0 animate-fade-right animate-delay-2000 animate-ease-out">
                <h3 className="text-center text-5xl my-4">🏆</h3>
                <img className="w-full h-auto px-4 my-4" src="https://via.placeholder.com/200x100"></img>
                <h3 className="font-extrabold text-center text-2xl">
                    <DriverView
                        supabase={props.supabase}
                        driverRef={results[0].drivers.driverRef}
                        forename={results[0].drivers.forename}
                        surname={results[0].drivers.surname} />
                </h3>
                <h3 className="font-bold text-center text-xl">
                    <ConstructorView supabase={props.supabase}
                        constructorRef={results[0].constructors.constructorRef}
                        name={results[0].constructors.name} />
                </h3>
                <table className="w-full text-center my-8">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{results[0].number}</td>
                            <td>{results[0].points}</td>
                        </tr>
                    </tbody>
                </table>

                <table className="w-full text-center">
                    <thead>
                        <tr>
                            <th>Fastest Lap</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{!isEmpty ? results[0].fastestLapTime : "N/A"}</td>
                            <td>{results[0].time}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="absolute top-0 bg-cover w-full h-full bg-white bg-center opacity-80 -z-50" />
                <div className="absolute top-0 bg-cover w-full h-full bg-center opacity-30 -z-50"
                    style={{ backgroundImage: `url("http://purecatamphetamine.github.io/country-flag-icons/3x2/${results[0].drivers.countryCode}.svg")` }} />
            </div>
        )
    }

    return (
        <div>
            <h3 className="text-center text-3xl">🏆</h3>
            <img className="w-full h-auto px-4" src="https://via.placeholder.com/200x100"></img>
            <h4 className="bold text-center">Winner</h4>
        </div>
    )
}

export default Winner;