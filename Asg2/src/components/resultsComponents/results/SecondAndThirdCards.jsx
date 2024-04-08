/* eslint-disable react/prop-types */
const SecondAndThirdCards = (props) => {
    console.log(props);

    return (
        <div className="flex my-2 relative overflow-hidden animate-fade-right animate-delay-300 animate-ease-in-out">
            <h3 className="text-5xl">{props.medal}</h3>
            <img className="w-16" src="https://placehold.co/15" />
            <div className="ml-2 font-bold">
                <h3 className="">{props.race.drivers.forename} {props.race.drivers.surname}</h3>
                <h4>{props.race.constructors.name}</h4>
            </div>
            <div className="ml-auto">
                <h3 className="font-semibold text-center">Time</h3>
                <h4>{props.race.time}</h4>
            </div>
            <div className="mx-4">
                <h3 className="font-semibold">Points</h3>
                <h4 className="text-center">{props.race.points}</h4>
            </div>
            <div className="absolute top-0 left-0 w-1/2 min-h-screen bg-no-repeat opacity-30 -z-50 mx-2"
                style={{ backgroundImage: `url("http://purecatamphetamine.github.io/country-flag-icons/3x2/${props.race.drivers.countryCode}.svg")` }} />
        </div>
    )
}

export default SecondAndThirdCards;