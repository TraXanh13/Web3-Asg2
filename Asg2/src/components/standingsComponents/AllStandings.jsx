import { useContext } from "react";
import { AppContext } from "../../F1Context";
import DriverStandings from "./DriverStandings";
import ConstructorStandings from "./ConstructorStandings";
const AllStandings = (props) => {
    const { constructorStandings, driverStandings } = useContext(AppContext);

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