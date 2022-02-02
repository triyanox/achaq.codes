import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { IsOpenContext } from "./OpenContext";

export default function MyModal() {
  let [isOpen, setIsOpen] = useContext(IsOpenContext);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center backdrop-blur-2xl">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block  w-full max-w-sm lg:max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 dark:bg-gray-200 bg-opacity-60 dark:bg-opacity-60 backdrop-blur-3xl shadow-xl rounded-2xl">
                <div className="flex flex-col justify-center items-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-400 dark:text-gray-800"
                  >
                    Message Sent
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="text-sm text-gray-300 dark:text-gray-500 text-center">
                      Thank you so much for your message ! I will get back to
                      you Soon 😊 !
                    </p>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={closeModal}
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium bg-gray-200 dark:bg-gray-800 border border-transparent rounded-md active:scale-110 transition-all duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    >
                      <p className="bg-gradient-to-r from-cyan-500 to-purple-400  text-transparent bg-clip-text">
                        Got it, thanks!
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
