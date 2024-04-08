import { useContext } from "react";
import { AppContext } from "../../F1Context";
import Driver from "./Driver";
import StandingsHeader from "../functionalComponents/StandingsHeader";

const DriverStandings = (props) => {
    const { driverStandings } = useContext(AppContext);

    return (
        <div className="w-fit border ml-10 px-4 justify-items-center">
            <h3 className='font-bold text-lg text-center'>Drivers</h3>
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
                    {driverStandings.map((d, indx) => <Driver key={indx} driver={d} supabase={props.supabase} />)}

                </tbody>
            </table>
        </div>
    )
}

export default DriverStandings;