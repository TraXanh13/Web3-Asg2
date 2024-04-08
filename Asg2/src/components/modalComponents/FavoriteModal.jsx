import { useContext, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { AppContext } from "../../F1Context";
import Button from "../functionalComponents/Button";

import ConstructorView from "../functionalComponents/ConstructorView";
import DriverView from "../functionalComponents/DriverView";
import CircuitView from "../functionalComponents/CircuitView";

const FavoritesModal = (props) => {
    const { favoriteView, setFavoriteView } = useContext(AppContext);

    const { favoriteDrivers, setFavoriteDrivers,
        favoriteConstructors, setFavoriteConstructors,
        favoriteCircuits, setFavoriteCircuits } = useContext(AppContext);

    const handleFavoriteClose = () => {
        setFavoriteView(false);
    }

    const handleEmptyFavorites = () => {
        setFavoriteCircuits([]);
        setFavoriteConstructors([])
        setFavoriteDrivers([])
    }

    return (
        <>
            <Transition appear show={favoriteView} as={Fragment}>
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
                                        <Button onClick={handleEmptyFavorites}>
                                            Empty Favorites
                                        </Button>
                                        <Button onClick={handleFavoriteClose} >
                                            Close
                                        </Button>
                                    </div>
                                </div>

                                {/* Modal body */}
                                <div className="flex items-center justify-evenly p-2 mx-3">
                                    <div className="w-30 p-4 text-white self-start">
                                        <h1 className="text-center">Drivers</h1>
                                        <div className="flex flex-col">
                                            {favoriteDrivers.map((d, indx) =>
                                                <DriverView
                                                    key={indx}
                                                    supabase={props.supabase}
                                                    driverRef={d.driverRef}
                                                    forename={d.forename}
                                                    surname={d.surname} />)}
                                        </div>
                                    </div>
                                    <div className="w-30 p-4 text-white self-start">
                                        <h1 className="text-center">Constructors</h1>
                                        <div className="flex flex-col">
                                            {favoriteConstructors.map((c, indx) =>
                                                <ConstructorView
                                                    key={indx}
                                                    supabase={props.supabase}
                                                    constructorRef={c.constructorRef}
                                                    name={c.name} />)}
                                        </div>

                                    </div>
                                    <div className="w-30 p-4 text-white self-start">
                                        <h1 className="text-center">Circuits</h1>
                                        <div className="flex flex-col">
                                            {favoriteCircuits.map((cc, indx) =>
                                                <CircuitView
                                                    key={indx}
                                                    supabase={props.supabase}
                                                    circuitRef={cc.constructorRef}
                                                    round={null}
                                                    name={cc.name}
                                                    className="min-w-52 cursor-pointer text-center" />)}
                                        </div>
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