import { useState, useContext, Fragment, useEffect } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { AppContext } from "../../F1Context";
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import Button from "../functionalComponents/Button";
import './circuitMap.css'

const CircuitModal = () => {
    //This state is temporary and is use for testing, please change this to a proper one 
    const {
        circuit,
        circuitView,
        setCircuitView,
        favoriteCircuits,
        setFavoriteCircuits
    } = useContext(AppContext);

    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [inFavorites, setInFavorites] = useState(false);

    useEffect(() => {
        if (circuit) {
            setIsDataLoaded(true);
        }


        //check if the current circuit is in the favorites
        const isInFavorites = favoriteCircuits.some(favCircuit => favCircuit.circuitRef === circuit[0].circuitRef);

        setInFavorites(isInFavorites);

        setTimeout(function () {
            window.dispatchEvent(new Event("resize"));
        }, 500);

    }, [circuit, favoriteCircuits]);

    const handleCircuitClose = () => {
        setCircuitView(false);
    }

    const addToFavorites = () => {

        if (!inFavorites) {
            // If not already in favorites, add to favorites
            setFavoriteCircuits([...favoriteCircuits, circuit[0]]);
        }
    }

    return (
        <>
            {/*Please change the show to the right state name after testing */}
            <Transition appear show={circuitView} as={Fragment}>
                <Dialog as="div" tabIndex={-3} className="z-50 w-full" onClose={() => { }}>
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
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-2xl ">
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
                                <div className="flex items-center justify-between p-4 mx-2 border-b rounded-t dark:border-gray-600">
                                    <Dialog.Title as="h3" className="text-2xl font-montserrat font-bold text-black">
                                        Circuit Details
                                    </Dialog.Title>
                                    <div>
                                        <Button disabledStatus={inFavorites} onClick={addToFavorites}>
                                            {inFavorites ? 'Already in Favorites' : 'Add to Favorites'}
                                        </Button>
                                        <Button onClick={handleCircuitClose} >
                                            Close
                                        </Button>
                                    </div>
                                </div>

                                {/* Modal body */}
                                <div className="flex flex-col items-center justify-between p-2 mx-3 text-black text-center font-barlow-condensed font-semibold text-xl">
                                    {isDataLoaded ? (
                                        <>
                                            <div className="flex w-fit p-4">
                                                {/* <h1 className="flex-row text-center px-2">Circuit Image</h1> */}
                                                <img className="circuitImg mr-4" src="https://placehold.co/200"></img>
                                                {/* <h1 className="flex-row text-center" >Circuit Map</h1> */}
                                                <MapContainer center={[circuit[0].lat, circuit[0].lng]} zoom={13}>
                                                    <TileLayer
                                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                    />
                                                    <Marker position={[circuit[0].lat, circuit[0].lng]}>
                                                        <Popup>
                                                            <h2>{circuit[0].name}</h2>
                                                        </Popup>
                                                    </Marker>
                                                </MapContainer>
                                            </div>
                                            <div className="w-fit p-4">
                                                <p className="p-1">{circuit[0].name}</p>
                                                <p className="p-1">{circuit[0].location}, {circuit[0].country} </p>
                                                <a href={circuit[0].url} target="_blank" className=" hover:text-green-600">Link to Wiki</a>
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

export default CircuitModal;