import {Link} from 'react-router-dom'

const Race = (props) => {
    console.log(props)
    return (
        <div className="flex justify-between">
            <div className="min-w-52">{props.index}. {props.race.name}</div> 
            <div className="mx-12"> {props.race.date}</div>
            <div>
                <button className="mr-2 border rounded px-2 hover:bg-red-700 hover:text-white">Results</button>
                <button className="border rounded px-2 hover:bg-red-700 hover:text-white">Standings</button>
            </div>
        </div>
    );
}

export default Race;