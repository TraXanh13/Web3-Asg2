import HeaderApp from './HeaderApp';
import Races from './Races';


const Dashboard = (props) => {

    return (
        <main>
            <HeaderApp supabase={props.supabase} />
            <Races supabase={props.supabase} />
        </main>

    )
}



export default Dashboard;