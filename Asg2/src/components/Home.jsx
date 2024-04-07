/* eslint-disable react/prop-types */
import Races from './racesComponents/Races'
import Results from './resultsComponents/Results'

const Home = (props) => {
    return(
        <container className="flex max-w-screen border border-red-600">
            <Races supabase={props.supabase}/>
            <Results supabase={props.supabase}/>
        </container>
    )
}

export default Home;