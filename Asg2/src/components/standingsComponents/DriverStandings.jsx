import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../F1Context";
import Driver from "./Driver";
import StandingsHeader from "../functionalComponents/StandingsHeader";

const DriverStandings = (props) => {
    const { driverStandings, setDriverStandings } = useContext(AppContext);

    function filterDriverStandings() {
        const copy = [...driverStandings].reverse();
        setDriverStandings(copy);
    }

    return (
        <div className="w-fit border ml-10 px-4 justify-items-center animate-fade-right animate-delay-300 animate-ease-out">

            <div className="flex my-5 justify-center">
                <h3 className='font-bold text-2xl text-center'>Drivers</h3>
                <button type="submit" className="absolute right-0 h-6 mr-10 mt-2" onClick={filterDriverStandings}>
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
                    {driverStandings.map((d, indx) => <Driver key={indx} driver={d} supabase={props.supabase} />)}

                </tbody>
            </table>
        </div>
    )
}

export default DriverStandings;