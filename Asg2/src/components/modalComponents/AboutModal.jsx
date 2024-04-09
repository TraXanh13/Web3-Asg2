import { useContext, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { AppContext } from "../../F1Context";
import Button from "../functionalComponents/Button";

const AboutModal = () => {
    const { aboutView, setAboutView } = useContext(AppContext);

    const handlAboutClose = () => {
        setAboutView(false);
    }

    return (
        <>
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

                            <Dialog.Panel className="relative bg-gray-200 rounded-lg shadow" >
                                {/* Modal header */}
                                <div className="flex items-center justify-between p-4 mx-2 border-b rounded-t border-gray-800">
                                    <Dialog.Title as="h3" className="text-2xl font-montserrat font-bold text-black">
                                        About Us
                                    </Dialog.Title>
                                    <div>
                                        <Button onClick={handlAboutClose} >
                                            Close
                                        </Button>
                                    </div>
                                </div>

                                {/* Modal body */}
                                <div className="flex flex-col items-center justify-between p-2 mx-3 text-black font-barlow-condensed">
                                    <h1 className="text-2xl font-bold my-4 text-center">Welcome to F1 Fusion, an F1 dashboard covering data from 2000-2023</h1>
                                    <p className="my-4 text-xl font-medium">
                                        This site was created by: Kyle and Keen
                                    </p>
                                    <p className=" text-xl font-medium text-center">
                                        This project used Vite, React, TailwindCSS, Supabase, and HeadlessUI
                                        <br />This site is being hosted on Netlify
                                    </p>
                                    <a className="my-4 underline font-semibold text-lg" href="https://github.com/TraXanh13/Web3-Asg2">Github Repo</a>

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