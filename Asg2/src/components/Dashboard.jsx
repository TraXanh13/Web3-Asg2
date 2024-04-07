/* eslint-disable react/prop-types */
import HeaderApp from './headerComponents/HeaderApp';
import Races from './racesComponents/Races';
import Results from './resultsComponents/Results'


const Dashboard = (props) => {

    return (
        <main className='min-h-full'>
            <HeaderApp supabase={props.supabase} />
            <div className="absolute w-full flex h-3/4"
            >
                <Races supabase={props.supabase} />
                <Results supabase={props.supabase} />
            </div>
        </main>

    )
}



export default Dashboard;