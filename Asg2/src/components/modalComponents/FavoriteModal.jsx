import { useContext, useState, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { AppContext } from "../../F1Context";

const FavoritesModal = () => {
    const { favoriteView, setFavoriteView } = useContext(AppContext)

    const handleFavoriteClose = () => {
        setFavoriteView(false);
    }

    return (
        <>
            <Transition appear show={favoriteView} as={Fragment}>
                <Dialog as="div" tabIndex={-1} className="z-50 w-full" onClose={handleFavoriteClose}>

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
                    <div className="absolute top-20 right-0 p-4 w-full max-w-2xl max-h-full">
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
                                    <Dialog.Title as="h3" className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Favorites
                                    </Dialog.Title>
                                    <div>
                                        <button type="button" className="text-gray-400 bg-transparent px-2 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm  ms-auto inline-flex justify-right items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                            Empty Favorites
                                        </button>
                                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm  ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleFavoriteClose} >
                                            Close
                                        </button>
                                    </div>
                                </div>

                                {/* Modal body */}
                                <div className="flex items-center justify-between p-2 mx-3">
                                    <div className="w-fit p-4 text-white">
                                        <h1 className="text-center">Drivers</h1>
                                        <p>Something</p>
                                    </div>
                                    <div className="w-fit p-4 text-white">
                                        <h1 className="text-center">Constructors</h1>
                                        <p>Something</p>
                                    </div>
                                    <div className="w-fit p-4 text-white">
                                        <h1 className="text-center">Circuits</h1>
                                        <p>Something</p>
                                    </div>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>



    )
}

export default FavoritesModal;