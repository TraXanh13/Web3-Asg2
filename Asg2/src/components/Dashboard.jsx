/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { AppContext } from '../F1Context';
import HeaderApp from './headerComponents/HeaderApp';
import Races from './racesComponents/Races';
import Results from './resultsComponents/Results'
import AllStandings from './standingsComponents/AllStandings';

//Import Modal Views
import FavoritesModal from './modalComponents/FavoriteModal';
import ConstructorModal from './modalComponents/ConstructorModal';
import DriverModal from './modalComponents/DriverModal';
import CircuitModal from './modalComponents/CircuitModal';

const Dashboard = (props) => {
    const { view } = useContext(AppContext);

    let compView = <h1>None</h1>;

    if (view === "results") {
        compView = <Results />
    } else if (view == "standings") {
        compView = <AllStandings supabase={props.supabase} />
    }

    return (
        <main className='min-h-full'>
            <HeaderApp supabase={props.supabase} />
            <div className="absolute w-full flex h-3/4"
            >
                <Races supabase={props.supabase} />
                {compView}

            </div>
            <FavoritesModal />
            <ConstructorModal />
            <DriverModal />
            <CircuitModal />
        </main>

    )
}



export default Dashboard;