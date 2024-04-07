/* eslint-disable react/prop-types */
import Winner from './results/Winner'
import SecondAndThird from './results/SecondAndThird';
import OtherDrivers from './results/OtherDrivers';
import { useEffect, useContext } from 'react';
import { AppContext } from '../../F1Context';

const Results = (props) => {

    return (
        <div className="border flex grow flex-col min-w-max pb-4">
            <h2 className='font-bold text-xl text-center'>Results</h2>
            <div className="flex grow">
                <div className="border grow ml-4">
                    <h3 className='font-bold text-xl text-center'>Qualifying</h3>
                </div>
                <div className="border mx-4 grow grid grid-cols-6 grid-rows-11">
                    <h3 className='font-bold text-xl text-center col-span-full'>Results</h3>
                    <Winner />
                    <SecondAndThird />
                    <OtherDrivers />
                </div>
            </div>
        </div>
    )
}

export default Results;