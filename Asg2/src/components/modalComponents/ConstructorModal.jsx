import { useContext, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { AppContext } from "../../F1Context";
import Button from "../functionalComponents/Button";

const ConstructorModal = (props) => {
    //This state is temporary and is use for testing, please change this to a proper one 
    const { testView, setTestView } = useContext(AppContext)

    const handleConstructorClose = () => {
        setTestView(false);
    }

    return (
        <>
            {/*Please change the show to the right state name after testing */}
            <Transition appear show={testView} as={Fragment}>
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
                                        <Button>
                                            Empty Favorites
                                        </Button>
                                        <Button onClick={handleConstructorClose} >
                                            Close
                                        </Button>
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

export default ConstructorModal;