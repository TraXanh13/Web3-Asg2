import { useContext, Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { AppContext } from "../../F1Context";
import Button from "../functionalComponents/Button";
import dateFormat from "dateformat";

const DriverModal = () => {
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
            setIsDataLoaded(true);
        }
        //check if the current circuit is in the favorites
        const isInFavorites = favoriteDrivers.some(favDriver => favDriver.driverRef === driver[0].driverRef);
        setInFavorites(isInFavorites);

    }, [driver, favoriteDrivers]);

    const addToFavorites = () => {

        if (!inFavorites) {
            setFavoriteDrivers([...favoriteDrivers, driver[0]]);
        }
    }

    function calculateAge(dob) {

        var today = new Date();
        var birthday = new Date(dob);
        var age = today.getFullYear() - birthday.getFullYear();
        var month = today.getMonth() - birthday.getMonth();

        if (month < 0 || (month === 0 && today.getDate < birthday.getDate())) {
            age--;
        }
        return age;
    }


    return (
        <>
            <Transition appear show={driverView} as={Fragment}>
                <Dialog as="div" tabIndex={-1} className="z-60 w-full" onClose={() => { }}>
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

                            <Dialog.Panel className="relative bg-gray-200 rounded-lg shadow" >
                                {/* Modal header */}
                                <div className="flex items-center justify-between p-4 mx-2 border-b rounded-t border-gray-800">
                                    <Dialog.Title as="h1" className="text-2xl font-montserrat font-bold text-black">
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
                                <div className="flex flex-col items-center justify-between p-2 mx-3 text-black font-barlow-condensed">
                                    {isDataLoaded ? (
                                        <>
                                            <div className="w-fit p-4">
                                                <img src="https://placehold.co/250"></img>

                                            </div>
                                            <div className="w-fit p-4 text-center font-semibold text-xl">
                                                <p className="text-2xl py-1">{driver[0].forename} {driver[0].surname}</p>
                                                <p className="py-1">Date of Birth: {dateFormat(driver[0].dob, "mmmm dS, yyyy")}</p>
                                                <p className="py-1">Age: {calculateAge(driver[0].dob)}</p>
                                                <p className="py-1">Nationality: {driver[0].nationality}</p>

                                                <a href={driver[0].url} target="_blank" className=" hover:text-green-600">Link to Wiki</a>
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