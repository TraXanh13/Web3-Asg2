import { useContext } from "react";
import { AppContext } from "../../F1Context";
import Constructor from "./Constructor";
import StandingsHeader from "../functionalComponents/StandingsHeader";

const ConstructorStandings = (props) => {
    const { constructorStandings, setConstructorStandings } = useContext(AppContext);

    function filterConstructorStandings() {
        const copy = [...constructorStandings].reverse();

        setConstructorStandings(copy);
    }

    return (
        <div className="w-fit border ml-10 px-4 justify-items-center animate-fade-right animate-ease-out">
            <div className="flex my-5 justify-center">
                <h3 className='font-bold text-2xl text-center'>Constructors</h3>
                <button type="submit" className="absolute right-0 h-6 mr-10 mt-2" onClick={filterConstructorStandings}>
                    <img src="/images/icons/sort.png" alt="sort icon" title="sort icon" />
                </button>
            </div>
            <table className="table-auto w-96">
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
                <tbody>
                    {constructorStandings.map((c, indx) => <Constructor key={indx} constructor={c} supabase={props.supabase} />)}

                </tbody>
            </table>
        </div>
    )
}

export default ConstructorStandings;