/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { AppContext } from '../F1Context';
import HeaderApp from './headerComponents/HeaderApp';
import Races from './racesComponents/Races';
import Results from './resultsComponents/Results'
import FavoritesModal from './modalComponents/FavoriteModal';
import ConstructorModal from './modalComponents/ConstructorModal';

const Dashboard = (props) => {
    const { view } = useContext(AppContext);

    let compView = <h1>None</h1>;

    if (view === "results") {
        compView = <Results supabase={props.supabase} />
    } else if (view == "standings") {
        compView = <h1>Standings</h1>
    }

    return (
        <main>
            <HeaderApp supabase={props.supabase} />
            <div className="flex">
                <Races supabase={props.supabase} />
                {compView}

            </div>
            <FavoritesModal />
            <ConstructorModal />
        </main>

    )
}



export default Dashboard;