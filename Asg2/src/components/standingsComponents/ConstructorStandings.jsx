import { useContext } from "react";
import { AppContext } from "../../F1Context";
import Constructor from "./Constructor";
import StandingsHeader from "../functionalComponents/StandingsHeader";

const ConstructorStandings = (props) => {
    const { constructorStandings } = useContext(AppContext);

    return (
        <div className="w-fit border ml-10 px-4 justify-items-center animate-fade-right animate-ease-out">
            <h3 className='font-bold text-lg text-center'>Constructors</h3>
            {/* another comp here and use map */}

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