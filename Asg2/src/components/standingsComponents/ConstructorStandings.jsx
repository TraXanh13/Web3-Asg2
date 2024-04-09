/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AppContext } from "../../F1Context";
import Constructor from "./Constructor";
import StandingsHeader from "../functionalComponents/StandingsHeader";
import { GoSortDesc } from "react-icons/go";
import { GoSortAsc } from "react-icons/go";

/*
 * The table of constructors
 */
const ConstructorStandings = (props) => {
    // The list of constructor standings
    const { constructorStandings, setConstructorStandings } = useContext(AppContext);

    // Flag to identify if the list is descending
    const [isDescending, setIsDescending] = useState(true);

    // Reverse the list of constructors
    function filterConstructorStandings() {
        const copy = [...constructorStandings].reverse();

        setConstructorStandings(copy);
        setIsDescending(!isDescending);
    }

    return (
        <div className="w-[35%] ml-10 px-4 pb-5 h-full justify-items-center animate-fade-right animate-ease-out animate-delay-300 bg-gray-100 rounded-3xl">
            <div className="flex p-2 mt-2 justify-center sticky top-0 bg-gray-800 rounded-l">
                <h3 className='font-bold text-2xl text-center self-center text-gray-200 cursor-default'>Constructors</h3>
                <button type="submit" className="absolute right-0 mr-10" onClick={filterConstructorStandings}>
                    {isDescending ? <GoSortDesc style={{ color: 'white', fontSize: '35px' }} /> : <GoSortAsc style={{ color: 'white', fontSize: '35px' }} />}
                </button>
            </div>
            <table className="table-auto w-full h-3/4">
                {/* Table Header */}
                <thead className="">
                    <tr className="text-left">
                        <StandingsHeader>Pos</StandingsHeader>
                        <StandingsHeader></StandingsHeader>
                        <StandingsHeader>Pts</StandingsHeader>
                        <StandingsHeader>Wins</StandingsHeader>
                    </tr>
                </thead>

                {/*Table Content */}
                <tbody className="p-4">
                    {constructorStandings.map((c, indx) => <Constructor key={indx} constructor={c} supabase={props.supabase} />)}

                </tbody>
            </table>
        </div>
    )
}

export default ConstructorStandings;