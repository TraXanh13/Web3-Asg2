import { useState, useContext, Fragment, useEffect } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { AppContext } from "../../F1Context";
import Button from "../functionalComponents/Button";

const AboutModal = (props) => {
    //This state is temporary and is use for testing, please change this to a proper one 

    const { aboutView, setAboutView } = useContext(AppContext);

    const handlAboutClose = () => {
        setAboutView(false);
    }

    return (
        <>
            {/*Please change the show to the right state name after testing */}
            <Transition appear show={aboutView} as={Fragment}>
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

                            <Dialog.Panel className="relative bg-white rounded-lg shadow dark:bg-gray-700" >
                                {/* Modal header */}
                                <div className="flex items-center justify-between p-4 mx-2 border-b rounded-t dark:border-gray-600">
                                    <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900 dark:text-white">
                                        About Us
                                    </Dialog.Title>
                                    <div>
                                        <Button onClick={handlAboutClose} >
                                            Close
                                        </Button>
                                    </div>
                                </div>

                                {/* Modal body */}
                                <div className="flex flex-col items-center justify-between p-2 mx-3">
                                    <h1>Hello</h1>
                                    <p>Us</p>
                                    <p>Us 2</p>

                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )

}

export default AboutModal;