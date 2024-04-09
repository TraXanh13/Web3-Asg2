import { useContext, useState } from "react";
import { AppContext } from "../../F1Context";
import Driver from "./Driver";
import StandingsHeader from "../functionalComponents/StandingsHeader";
import { GoSortDesc } from "react-icons/go";
import { GoSortAsc } from "react-icons/go";

/*
 * The table of driver standings
 */
const DriverStandings = (props) => {
    // The list of drivers standings
    const { driverStandings, setDriverStandings } = useContext(AppContext);
    
    // Flag to identify if the list is descending
    const [isDescending, setIsDescending] = useState(true);

    // Reverses the list of driver standings
    function filterDriverStandings() {
        const copy = [...driverStandings].reverse();
        setDriverStandings(copy);
        setIsDescending(!isDescending);
    }

    return (
        <div className="w-[38%] ml-10 px-4 pb-5 h-fit justify-items-start font-montserrat animate-fade-right animate-delay-300 animate-ease-out bg-gray-100 rounded-3xl">
            <div className="flex p-2 mt-2 justify-center sticky top-0 bg-gray-800 rounded-lg">
                <h3 className='font-bold text-2xl text-center self-center text-gray-200 cursor-default'>Drivers</h3>
                <button type="submit" className="absolute right-0 mr-10 " onClick={filterDriverStandings}>

                    {isDescending ? <GoSortDesc style={{ color: 'white', fontSize: '35px' }} /> : <GoSortAsc style={{ color: 'white', fontSize: '35px' }} />}
                </button>
            </div>
            <table className="table-auto w-full h-5/6">
                {/* Table Header */}
                <thead>
                    <tr className="text-left">
                        <StandingsHeader>Pos</StandingsHeader>
                        <StandingsHeader></StandingsHeader>
                        <StandingsHeader>Pts</StandingsHeader>
                        <StandingsHeader>Wins</StandingsHeader>
                    </tr>
                </thead>

                {/*Table Content */}
                <tbody className="p-4">
                    {driverStandings.map((d, indx) => <Driver key={indx} driver={d} supabase={props.supabase} />)}

                </tbody>
            </table>
        </div>
    )
}

export default DriverStandings;