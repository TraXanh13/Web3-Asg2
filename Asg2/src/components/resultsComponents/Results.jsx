/* eslint-disable react/prop-types */
import Winner from './results/Winner'
import SecondAndThird from './results/SecondAndThird';
import OtherDrivers from './results/OtherDrivers';
import Qualifying from './qualifying/Qualifying'
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../F1Context';
import PropagateLoader from "react-spinners/PropagateLoader"
import { GoSortDesc } from "react-icons/go";
import { GoSortAsc } from "react-icons/go";

const Results = (props) => {
    const { results, qualifying, setQualifying, resultsLoading, setResultsLoading } = useContext(AppContext)
    const [isDescending, setIsDescending] = useState(true);

    useEffect(() => {
        setTimeout(() => setResultsLoading(false), 1500);
    }, [resultsLoading]);

    function updateQualifying() {
        const copy = [...qualifying].reverse();
        setQualifying(copy);
        setIsDescending(!isDescending);
    }

    if (resultsLoading) {
        return (
            <div className="absolute top-1/2 right-[35%] transform -translate-x-1/2 -translate-y-1/2">
                <PropagateLoader
                    color="#e11c1c"
                    size={20}
                />
            </div>
        )
    }

    return (
        <div className="flex grow flex-wrap h-full relative overflow-y-auto p-3 font-montserrat animate-fade-right animate-delay-100 animate-ease-out">
            {/* Results Header */}
            <h2 className='font-bold text-2xl w-full text-center sticky top-0 z-20 bg-black text-white py-4 rounded-2xl'>{results.length > 0 ? (results[0].races.name + " " + results[0].races.year) : "Races"}</h2>

            {/* Qualifying Section */}
            <div className=" w-5/12 p-4 animate-fade-right overflow-y-auto no-scrollbar animate-delay-300 animate-ease-out">
                <div className="flex mb-2 justify-center">
                    <h3 className='font-bold text-2xl text-center'>Qualifying</h3>
                    <button type="submit" className="absolute right-0 h-6 mr-10" onClick={updateQualifying}>
                        {isDescending ? <GoSortDesc style={{ color: 'black', fontSize: '40px' }} /> : <GoSortAsc style={{ color: 'black', fontSize: '40px' }} />}
                    </button>
                </div>

                <table className="text-left border-collapse border-spacing-0 mx-1 ">
                    <thead className=' font-barlow-condensed font-bold text-lg'>
                        <tr>
                            <td className="w-1/12">Pos</td>
                            <td className="w-1/6">Driver</td>
                            <td className="w-1/6">Constructor</td>
                            <td className="w-1/12">Q1</td>
                            <td className="w-1/12">Q2</td>
                            <td className="w-1/12">Q3</td>
                        </tr>
                    </thead>
                    <tbody>
                        {qualifying.map((result, i) => <Qualifying result={result} key={i} supabase={props.supabase} />)}
                    </tbody>
                </table>
            </div>

            {/* Results Section */}
            <div className=" m-0 w-7/12 flex flex-wrap animate-fade-up animate-delay-200 animate-ease-in-out">
                <h3 className='font-bold text-2xl pt-2 text-center w-full'>Results</h3>
                <Winner supabase={props.supabase} />
                <div className="flex flex-col items-stretch w-1/2 m-0">
                    <SecondAndThird supabase={props.supabase} />
                    <div className="items-stretch overflow-y-auto no-scrollbar cursor-default font-barlow-condensed animate-fade-up animate-delay-300 animate-ease-in-out">
                        <table className="text-left border-collapse border-spacing-0">
                            <thead className='text-xl font-semibold'>
                                <tr>
                                    <td className="w-1/12 text-center">Pos</td>
                                    <td className="w-1/5">Driver</td>
                                    <td className="w-1/5">Constructor</td>
                                    <td className="w-1/12 text-center">Laps</td>
                                    <td className="w-1/12 text-center">Points</td>
                                </tr>
                            </thead>
                            <tbody>
                                {results.slice(3).map((result, i) => <OtherDrivers result={result} key={i} supabase={props.supabase} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results;