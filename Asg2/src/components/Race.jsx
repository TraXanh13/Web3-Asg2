/* eslint-disable react/prop-types */
const Race = (props) => {

    function convertDate(date) {
        const month= {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar",
            "04": "Apr",
            "05": "May",
            "06": "Jun",
            "07": "Jul",
            "08": "Aug",
            "09": "Sep",
            "10": "Oct",
            "11": "Nov",
            "12": "Dec"
        }

        return(`${month[date.substring(5,7)]} ${date.substring(8)}`)
    }

    return (
        <div className="flex justify-between">
            <a href={props.race.url} target="_blank" rel="noopener noreferrer" className="min-w-52">{props.race.round}. {props.race.name}</a> 
            <div className="mx-12"> {convertDate(props.race.date)}</div>
            <div className="flex overflow-hidden whitespace-nowrap">
                    <button>
                        <img src="/images/icons/clipboard.png" title="Results icon" alt="Results icon" className="mr-2"></img>
                    </button>

                    <button>
                        <img src="/images/icons/podium.png" title="Podium icon" alt="Podium icon"></img>
                    </button>
            </div>
        </div>
    );
}

export default Race;