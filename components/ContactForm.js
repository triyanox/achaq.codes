import { useContext } from "react";
import { IsOpenContext } from "./OpenContext";
import MyModal from "./Modal";
function ContactForm() {
  let [isOpen, setIsOpen] = useContext(IsOpenContext);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <section
      id="contact"
      className="container px-12 lg:px-24 flex justify-center items-center flex-col mt-8 lg:mt-12 mb-4"
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
      <div className="flex flex-col justify-center items-center mt-8 px-auto">
        <form
          name="contactus"
          method="POST"
          data-netlify="true"
          action={openModal}
          className="  flex  flex-col items-center "
        >
          <input type="hidden" name="form-name" value="contactus" />

          <span className=" text-center mx-auto  text-gray-600 dark:text-gray-400 text-md">
            Full Name
          </span>
          <input
            name="cname"
            type="text"
            className="w-80 text-xl p-5 h-12  text-white dark:text-black mt-2  focus:outline-none focus:shadow-outline   rounded-md  bg-gray-800 dark:bg-gray-200 broder shadow-md"
            required
          />

          <span className="mt-4  text-center mx-auto  text-gray-600 dark:text-gray-400 text-md">
            Email
          </span>
          <input
            name="cemail"
            type="email"
            className="w-80 text-xl p-5  h-12 text-white dark:text-black mt-2  focus:outline-none focus:shadow-outline  bg-gray-800 dark:bg-gray-200  rounded-md shadow-md"
            required
          />

          <span className="mt-4  text-center mx-auto  text-gray-600 dark:text-gray-400 text-md">
            Message
          </span>
          <textarea
            name="cmessage"
            className="w-80 text-xl h-28  p-5 text-white dark:text-black  mt-2 focus:outline-none focus:shadow-outline  bg-gray-800 dark:bg-gray-200  rounded-md  resize-none shadow-md"
            required
          ></textarea>

          <button
            aria-label="submit"
            type="primary"
            htmlType="submit"
            className="mt-6 py-3 px-6 hover:scale-110 transition-all duration-500 active:scale-90 bg-gray-800 dark:bg-gray-200 mx-auto  rounded-md  text-md shadow-xl"
          >
            <p className="bg-gradient-to-r from-cyan-500 to-purple-400  text-transparent bg-clip-text">
              Send A Message
            </p>
          </button>
        </form>
      </div>
      <MyModal />
    </section>
  );
}

export default ContactForm;
