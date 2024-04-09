/* eslint-disable react/prop-types */
import DriverView from "../../functionalComponents/DriverView"
import ConstructorView from "../../functionalComponents/ConstructorView"

/*
 * Returns the cards for the second and third place drivers
 */
const SecondAndThirdCards = (props) => {

    return (
        <div className="flex my-2 relative overflow-hidden font-barlow-condensed animate-fade-right animate-delay-300 animate-ease-in-out">
            <h3 className="text-5xl cursor-default">{props.medal}</h3>
            <img className="w-16" src="https://placehold.co/15" />
            <div className="ml-2 font-semibold text-xl">
                <h3>
                    {/* The clickable drivers modal */}
                    <DriverView
                        supabase={props.supabase}
                        driverRef={props.race.drivers.driverRef}
                        forename={props.race.drivers.forename}
                        surname={props.race.drivers.surname}
                        className="w-40 text-center cursor-pointer hover:text-red-900" />
                </h3>
                <h4>
                    {/* The clickable constructors modal */}
                    <ConstructorView supabase={props.supabase}
                        constructorRef={props.race.constructors.constructorRef}
                        name={props.race.constructors.name}
                        className="w-40 text-center cursor-pointer hover:text-red-900" />
                </h4>
            </div>

            {/* The drivers time */}
            <div className="ml-auto text-xl cursor-default">
                <h3 className="font-semibold text-center">Time</h3>
                <h4>{props.race.time}</h4>
            </div>

            {/* The drivers points */}
            <div className="mx-4 text-xl cursor-default">
                <h3 className="font-semibold">Points</h3>
                <h4 className="text-center">{props.race.points}</h4>
            </div>

            {/* The flag background image */}
            <div className="absolute top-0 left-0 w-1/2 min-h-screen bg-white bg-no-repeat opacity-80 -z-50 mx-2" />
            <div className="absolute top-0 left-0 w-1/2 min-h-screen bg-no-repeat opacity-30 -z-50 mx-2"
                style={{ backgroundImage: `url("http://purecatamphetamine.github.io/country-flag-icons/3x2/${props.race.drivers.countryCode}.svg")` }} />
        </div>
    )
}

export default SecondAndThirdCards;