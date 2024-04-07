/* eslint-disable react/prop-types */
import Winner from './results/Winner'
import SecondAndThird from './results/SecondAndThird';
import OtherDrivers from './results/OtherDrivers';
import Qualifying from './qualifying/Qualifying'
import { useContext } from 'react';
import { AppContext } from '../../F1Context';

const Results = () => {
    const { results: results, qualifying: qualifying } = useContext(AppContext)

    return (
        <div className="border flex grow flex-wrap h-full relative overflow-hidden">
            {/* Results Header */}
            <h2 className='font-bold text-xl  w-full text-center sticky top-0 bg-white z-10'>{results.length > 0 ? (results[0].races.name + " " + results[0].races.year) : "Races"}</h2>

            {/* Qualifying Section */}
            <div className="border-r-2 m-0 w-2/5 pl-2">
                <h3 className='font-bold text-xl text-center'>Qualifying</h3>
                <table className="text-left border-collapse border-spacing-0">
                    <thead>
                        <tr>
                            <td className="w-1/12">Pos.</td>
                            <td className="w-1/5">Driver</td>
                            <td className="w-1/5">Constructor</td>
                            <td className="w-1/12">Q1</td>
                            <td className="w-1/12">Q2</td>
                            <td className="w-1/12">Q3</td>
                        </tr>
                    </thead>
                    <tbody>
                        {qualifying.map((result, i) => <Qualifying result={result} key={i} />)}
                    </tbody>
                </table>
            </div>

            {/* Results Section */}
            <div className=" m-0 w-3/5 flex flex-wrap">
                <h3 className='font-bold text-xl text-center w-full'>Results</h3>
                <Winner />
                <div className="flex flex-col items-stretch w-1/2 m-0">
                    <SecondAndThird />
                    <div className="items-stretch overflow-y-auto no-scrollbar">
                        <table className="text-left border-collapse border-spacing-0">
                            <thead>
                                <tr>
                                    <td className="w-1/12 text-center">Pos.</td>
                                    <td className="w-1/5">Driver</td>
                                    <td className="w-1/5">Constructor</td>
                                    <td className="w-1/12 text-center">Laps</td>
                                    <td className="w-1/12 text-center">Points</td>
                                </tr>
                            </thead>
                            <tbody>
                                {results.slice(3).map((result, i) => <OtherDrivers result={result} key={i} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results;