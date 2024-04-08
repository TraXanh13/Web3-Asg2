import { useContext } from "react";
import { AppContext } from "../../F1Context";
import DriverStandings from "./DriverStandings";

const AllStandings = (props) => {
    const { constructorStandings, driverStandings } = useContext(AppContext);

    if (constructorStandings.length > 0) {
        return (
            <div className="border flex grow flex-col min-w-max pb-4">
                <h1 className='font-bold text-xl text-center'>Standings</h1>
                <h2 className='font-bold text-base text-center'>After Round {constructorStandings[0].races.round}</h2>
                <div className="flex grow">
                    <DriverStandings drivers={driverStandings} supabase={props.supabase} />
                    <div className="border mx-4 grow">
                        <h3 className='font-bold text-xl text-center col-span-full'>Results</h3>
                    </div>
                </div>
            </div>
        )
    }

}

export default AllStandings;