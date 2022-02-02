import { useContext } from "react";
import { IsOpenContext } from "./OpenContext";
import MyModal from "./Modal";
import { SiLinkedin, SiInstagram, SiTwitter } from "react-icons/si";
import Link from "next/link";

function ContactForm() {
  let [isOpen, setIsOpen] = useContext(IsOpenContext);

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
      className="container h-screen px-12 lg:px-24  flex-col mt-8 lg:mt-12 "
    >
      <div className=" flex justify-start items-center flex-col mt-0 lg:mt-4 ">
        <h1 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 bg-gradient-to-r from-cyan-500 to-purple-800  text-transparent bg-clip-text">
          Contact Me
        </h1>
        <h3 className="text-gray-600 dark:text-gray-400 mb-2 text-center">
          If you find your self down here don&apos;t hesitate to leave a message
          !
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center mt-16 px-auto">
        <h3 className="text-gray-600 dark:text-gray-400 mb-2 text-center">
          This is my email !
        </h3>
        <div className="mt-8  flex  flex-col md:flex-row items-center justify-center gap-4 ">
          <div className="select-none w-80 text-xl p-5 h-12  text-white dark:text-black   focus:outline-none focus:shadow-outline   rounded-md  bg-gray-800 dark:bg-gray-200 broder shadow-md flex justify-center items-center">
            motriyanox@gmail.com
          </div>

          <button
            aria-label="submit"
            onClick={handleCopy}
            className=" py-3 px-6 hover:scale-110 transition-all duration-500 active:scale-90 bg-gray-800 dark:bg-gray-200 mx-auto  rounded-md  text-md shadow-xl"
          >
            <p className="bg-gradient-to-r from-cyan-500 to-purple-400  text-transparent bg-clip-text">
              Copy My Email
            </p>
          </button>
        </div>
        <div className=" flex justify-start items-center flex-col mt-16 ">
          <h3 className="text-gray-600 dark:text-gray-400 mb-2 text-center">
            And other ways to get in touch with me !
          </h3>
          <div className="mt-8 flex flex-row justify-center items-center gap-4">
            <Link href="https://www.linkedin.com/in/achaqdev/" passHref>
              <a target="_blank">
                <h1 className="text-gray-600 dark:text-gray-400 text-2xl hover:text-blue-600 hover:dark:text-blue-600 ">
                  <SiLinkedin />
                </h1>
              </a>
            </Link>

            <Link href="https://twitter.com/ac__haq" passHref>
              <a target="_blank">
                <h1 className="text-gray-600 dark:text-gray-400 text-2xl hover:text-blue-500 hover:dark:text-blue-500">
                  <SiTwitter />
                </h1>
              </a>
            </Link>

            <Link href="https://instagram.com/ac.haq/" passHref>
              <a target="_blank">
                <h1 className="text-gray-600 dark:text-gray-400 text-2xl hover:text-pink-700 hover:dark:text-pink-700">
                  <SiInstagram />
                </h1>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <MyModal />
    </section>
  );
}

export default ContactForm;
