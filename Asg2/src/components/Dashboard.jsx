/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { AppContext } from '../F1Context';
import HeaderApp from './headerComponents/HeaderApp';
import Footer from './footerComponents/Footer';
import Races from './racesComponents/Races';
import Results from './resultsComponents/Results'
import AllStandings from './standingsComponents/AllStandings';

//Import Modal Views
import FavoritesModal from './modalComponents/FavoriteModal';
import ConstructorModal from './modalComponents/ConstructorModal';
import DriverModal from './modalComponents/DriverModal';
import CircuitModal from './modalComponents/CircuitModal';
import AboutModal from './modalComponents/AboutModal';

const Dashboard = (props) => {
    const { view } = useContext(AppContext);

    let compView = <div></div>;

    if (view === "results") {
        compView = <Results supabase={props.supabase} />
    } else if (view == "standings") {
        compView = <AllStandings supabase={props.supabase} />
    } else {
        compView = <>
            <div className="border items-center flex justify-center w-full h-full">
                <h1 className='font-bold text-3xl text-center text-gray-400 py-1'>Choose a race to begin....</h1>
            </div>
        </>
    }

    return (
        <main className="max-h-screen overflow-y-hidden">
            <HeaderApp supabase={props.supabase} />
            <div className="absolute w-full flex h-5/6">
                <Races supabase={props.supabase} />
                {compView}

            </div>
            <FavoritesModal supabase={props.supabase} />
            <ConstructorModal />
            <DriverModal />
            <CircuitModal />
            <AboutModal />
            <Footer />
        </main>

    )
}



export default Dashboard;