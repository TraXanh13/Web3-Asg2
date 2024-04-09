import { useState, useContext, Fragment, useEffect } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { AppContext } from "../../F1Context";
import Button from "../functionalComponents/Button";

/*
 * Returns the modal for the constructor section
 * inspired by: https://headlessui.com/react/dialog
 */
const ConstructorModal = () => {
    /*
    * constructor: useState for the individual constructor data
    * constructorView: true to show the modal, false to hide the modal
    * favoriteConstructors: the list of constructors added to the favorites list
    */
    const {
        constructor,
        favoriteConstructors,
        setFavoriteConstructors,
        constructorView,
        setConstructorView } = useContext(AppContext);

    <div className="w-fit p-4">
        <img src="https://placehold.co/250"></img>
    </div>

    // flag for loader animation: true-on false-off
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [inFavorites, setInFavorites] = useState(false);

    useEffect(() => {
        if (constructor) {
            setIsDataLoaded(true);
        }
        const isInFavorites = favoriteConstructors.some(favConstructor => favConstructor.constructorRef === constructor[0].constructorRef);

        setInFavorites(isInFavorites);
    }, [constructor, favoriteConstructors]);

    // Closes the constructor modal
    const handleConstructorClose = () => {
        setConstructorView(false);
    }

    // Add the constructor to the favoriteConstructor list
    const addToFavorites = () => {
        if (!inFavorites) {
            setFavoriteConstructors([...favoriteConstructors, constructor[0]]);
        }
    }

    return (
        <>
            {/* Transition animation for the constructor modal */}
            <Transition appear show={constructorView} as={Fragment}>
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

                            <Dialog.Panel className="relative bg-gray-200 rounded-lg shadow" >
                                {/* Modal header */}
                                <div className="flex items-center justify-between p-4 mx-2 border-b rounded-t border-gray-800">
                                    <Dialog.Title as="h3" className="text-2xl font-montserrat font-bold text-black">
                                        Constructor Details
                                    </Dialog.Title>
                                    <div>
                                        <Button disabledStatus={inFavorites} onClick={addToFavorites}>
                                            {inFavorites ? 'Already in Favorites' : 'Add to Favorites'}
                                        </Button>
                                        <Button onClick={handleConstructorClose} >
                                            Close
                                        </Button>
                                    </div>
                                </div>

                                {/* Modal body */}
                                <div className="flex flex-col items-center justify-between p-2 mx-3 text-black font-barlow-condensed font-semibold text-2xl">
                                    {isDataLoaded ? (
                                        <>
                                            <div className="w-fit p-4">
                                                <img src="https://placehold.co/250"></img>
                                            </div>
                                            <div className="w-fit p-4 text-center">
                                                <p className="text-4xl pb-2">{constructor[0].name}</p>
                                                <p >Nationality: {constructor[0].nationality}</p>
                                                <a href={constructor[0].url} target="_blank" className=" hover:text-green-600">Link to Wiki</a>
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

export default ConstructorModal;