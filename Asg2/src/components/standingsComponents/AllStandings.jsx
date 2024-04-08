import { useContext, useEffect } from "react";
import { AppContext } from "../../F1Context";
import DriverStandings from "./DriverStandings";
import ConstructorStandings from "./ConstructorStandings";
import 'ldrs/infinity'

const AllStandings = (props) => {
    const { constructorStandings, driverStandings, standingsLoading, setStandingsLoading } = useContext(AppContext);

    useEffect(() => {
        setTimeout(() => setStandingsLoading(false), 1500);
    }, [standingsLoading]);

    if (standingsLoading) {
        return (
            // Default values shown
            <div className="absolute top-1/2 right-[30%] transform -translate-x-1/2 -translate-y-1/2">
                <l-infinity
                    size="140"
                    stroke="10"
                    bg-opacity="0.23"
                    speed="1.4"
                    color="red"
                ></l-infinity>
            </div>

        )
    }

    if (constructorStandings.length > 0) {
        return (
            <div className="border flex grow flex-col min-w-max pb-4">
                <h1 className='font-bold text-xl text-center'>Standings</h1>
                <h2 className='font-bold text-base text-center'>After Round {constructorStandings[0].races.round}</h2>
                <div className="flex grow justify-center">
                    <DriverStandings drivers={driverStandings} supabase={props.supabase} />
                    <ConstructorStandings constructors={constructorStandings} supabase={props.supabase} />
                </div>
            </div>
        )
    }

}

export default AllStandings;