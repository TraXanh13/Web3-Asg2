import {Link} from 'react-router-dom'

const Race = (props) => {

    return (
        <div className="flex justify-between">
            <div className="min-w-52">{props.index}. {props.race.name}</div> 
            <div className="mx-12"> {props.race.date}</div>
            <div>
                <Link to="/">
                    <button className="mr-2 border rounded px-2 hover:bg-red-700 hover:text-white">Results</button>
                </Link>
                
                <Link to="/">
                    <button className="border rounded px-2 hover:bg-red-700 hover:text-white">Standings</button>
                </Link>
            </div>
        </div>
    );
}

export default Race;