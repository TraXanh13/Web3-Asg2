import { useContext } from "react"
import { AppContext } from "../../../F1Context"

const Winner = () => {
    const { results: results } = useContext(AppContext)

    
    if(results.length > 0){
        return(
            // <div className="relative border col-span-3 row-span-10 bg-cover bg-center">
            <div className="relative w-1/2 items-stretch m-0">
                <h3 className="text-center text-5xl my-4">🏆</h3>
                <img className="w-full h-auto px-4 my-4" src="https://via.placeholder.com/200x100"></img>
                <h3 className="font-extrabold text-center text-2xl">{results[0].drivers.forename} {results[0].drivers.surname}</h3>
                <h3 className="font-bold text-center text-xl">{results[0].constructors.name}</h3>
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
                            <td>{results[0].fastestLapTime}</td>
                            <td>{results[0].time}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="absolute top-0 bg-cover w-full h-full bg-center opacity-20 -z-50"
                style={{backgroundImage: `url("http://purecatamphetamine.github.io/country-flag-icons/3x2/${results[0].drivers.countryCode}.svg")`}}/>
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