import { useContext, Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { AppContext } from "../../F1Context";
import Button from "../functionalComponents/Button";

const DriverModal = (props) => {
    //This state is temporary and is use for testing, please change this to a proper one 
    const { driver,
        driverView,
        setDriverView,
        favoriteDrivers,
        setFavoriteDrivers } = useContext(AppContext);

    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [inFavorites, setInFavorites] = useState(false);

    const handleDriverClose = () => {
        setDriverView(false);
    }

    useEffect(() => {
        if (driver) {
            setIsDataLoaded(true);;
        }
        //check if the current circuit is in the favorites
        const isInFavorites = favoriteDrivers.some(favDriver => favDriver.driverRef === driver[0].driverRef);
        setInFavorites(isInFavorites);

    }, [driver, favoriteDrivers]);

    const addToFavorites = () => {

        if (!inFavorites) {
            favoriteDrivers.push(driver[0]);
            setFavoriteDrivers([...favoriteDrivers]);
        }
    }

    return (
        <>
            {/*Please change the show to the right state name after testing */}
            <Transition appear show={driverView} as={Fragment}>
                <Dialog as="div" tabIndex={-1} className="z-50 w-full" onClose={() => { }}>
                    {/* This part will transition the background to dim */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/50" />
                    </Transition.Child>

                    {/* Main Content */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-2xl max-h-full">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >

                            <Dialog.Panel className="relative bg-white rounded-lg shadow dark:bg-gray-700" >
                                {/* Modal header */}
                                <div className="flex items-center justify-between p-4 mx-2 border-b rounded-t dark:border-gray-600">
                                    <Dialog.Title as="h1" className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Driver Details
                                    </Dialog.Title>
                                    <div>
                                        <Button disabledStatus={inFavorites} onClick={addToFavorites}>
                                            {inFavorites ? 'Already in Favorites' : 'Add to Favorites'}
                                        </Button>
                                        <Button onClick={handleDriverClose} >
                                            Close
                                        </Button>
                                    </div>
                                </div>

                                {/* Modal body */}
                                <div className="flex flex-col items-center justify-between p-2 mx-3">
                                    {isDataLoaded ? (
                                        <>
                                            <div className="w-fit p-4 text-white">
                                                <h1 className="text-center">Driver Image</h1>
                                                <p>Something</p>
                                            </div>
                                            <div className="w-fit p-4 text-white">
                                                <p className="text-center">{driver[0].forename} {driver[0].surname}</p>
                                                <p className="text-center">{driver[0].dob}</p>
                                                <p className="text-center">Age</p>
                                                <p className="text-center">{driver[0].nationality}</p>
                                                <p className="text-center">{driver[0].url}</p>
                                            </div>

                                        </>
                                    ) : (
                                        //Placeholder for content
                                        <div className="w-fit p-4 text-white">
                                            Loading...
                                        </div>
                                    )

                                    }

                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default DriverModal;