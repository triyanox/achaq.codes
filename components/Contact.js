import { useState } from "react";
import { SiLinkedin, SiInstagram, SiTwitter } from "react-icons/si/index.js";
import { BiCopy } from "react-icons/bi/index.js";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

function ContactForm() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function handleCopy() {
    navigator.clipboard.writeText("motriyanox@gmail.com");
    openModal();
  }

  return (
    <section
      id="contact"
      className="container h-screen px-4 lg:px-12 justify-center items-center "
    >
      <div className="w-full text-black dark:text-white pt-16 text-center">
        <h1 className="text-2xl mb-4">Contact</h1>
        <h2 className="text-lg">Get in touch with me</h2>
      </div>
      <div className="flex flex-col justify-center items-center mt-16 px-auto">
        <h3 className="text-black dark:text-white mb-2 text-center">
          This is my email !
        </h3>
        <div className="mt-8  flex  flex-col md:flex-row items-center justify-center gap-4 ">
          <div className="select-none w-80 text-xl p-5 h-12  text-black   dark:text-white focus:outline-none focus:shadow-outline   rounded-md border-2  border-[#FF8552] dark:border-[#00DFD8] broder flex justify-center items-center">
            motriyanox@gmail.com
          </div>

          <div
            aria-label="copy"
            onClick={handleCopy}
            className="text-black dark:text-white py-3 px-6 cursor-pointer transition-all duration-500 active:scale-90  text-lg flex flex-row gap-2 items-center hover:text-[#FF8552] dark:hover:text-[#00DFD8]"
          >
            <BiCopy />
            <p>Copy My Email</p>
          </div>
        </div>
        <div className=" flex justify-start items-center flex-col mt-16 ">
          <h3 className="text-black dark:text-white mb-2 text-center">
            And other ways to get in touch with me !
          </h3>
          <div className="mt-8 flex flex-row justify-center items-center gap-4">
            <Link href="https://www.linkedin.com/in/achaqdev/" passHref>
              <a target="_blank">
                <h1 className="text-black dark:text-white text-2xl hover:text-blue-600 hover:dark:text-blue-600 ">
                  <SiLinkedin />
                </h1>
              </a>
            </Link>

            <Link href="https://twitter.com/ac__haq" passHref>
              <a target="_blank">
                <h1 className="text-black dark:text-white text-2xl hover:text-blue-500 hover:dark:text-blue-500">
                  <SiTwitter />
                </h1>
              </a>
            </Link>

            <Link href="https://instagram.com/ac.haq/" passHref>
              <a target="_blank">
                <h1 className="text-black dark:text-white text-2xl hover:text-pink-700 hover:dark:text-pink-700">
                  <SiInstagram />
                </h1>
              </a>
            </Link>
          </div>
        </div>
      </div>

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
              <div className="inline-block  w-full max-w-sm lg:max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-black dark:bg-white shadow-xl rounded-2xl">
                <div className="flex flex-col justify-center items-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white dark:text-black"
                  >
                    Email Copied
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="text-sm text-white dark:text-black text-center">
                      Thank you so much for your time ! I&apos;m looking forward
                      to hear from you ???? !
                    </p>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={closeModal}
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium bg-white dark:bg-black border border-transparent rounded-md active:scale-110 transition-all duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    >
                      <p className="text-[#FF8552] dark:text-[#00DFD8]">
                        Awesome !
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}

export default ContactForm;
