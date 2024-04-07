/* eslint-disable react/prop-types */
import HeaderApp from './headerComponents/HeaderApp';
import Races from './racesComponents/Races';
import Results from './resultsComponents/Results'


const Dashboard = (props) => {

    return (
        <main>
            <HeaderApp supabase={props.supabase} />
            <div className="flex">
                <Races supabase={props.supabase} />
                <Results supabase={props.supabase} />
            </div>
        </main>

    )
}



export default Dashboard;