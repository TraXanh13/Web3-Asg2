/* eslint-disable react/prop-types */
import HeaderApp from './headerComponents/HeaderApp';
import Races from './racesComponents/Races';


const Dashboard = (props) => {

    return (
        <main>
            <HeaderApp supabase={props.supabase} />
            <Races supabase={props.supabase} />
        </main>

    )
}



export default Dashboard;