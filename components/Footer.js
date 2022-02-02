import {
  SiLinkedin,
  SiInstagram,
  SiGithub,
  SiTwitter,
  SiYoutube,
} from "react-icons/si";
import Link from "next/link";
const Footer = () => {
  return (
    <section className="container flex flex-col items-center md:flex-row  justify-center">
      <div className="md:w-full  px-5  mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex font-medium items-center md:justify-start justify-center">
          <span className=" text-2xl text-gray-600 dark:text-gray-400">
            Achaq Codes
          </span>
        </div>
      </div>
      <div className="mt-4 md:mt-0 flex flex-row justify-center items-center gap-4">
        <Link href="https://www.linkedin.com/in/achaqdev/" passHref>
          <a target="_blank">
            <h1 className="text-gray-600 dark:text-gray-400 text-2xl hover:text-blue-600 hover:dark:text-blue-600 ">
              <SiLinkedin />
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
        <Link href="https://youtube.com/c/triyanox/" passHref>
          <a target="_blank">
            <h1 className="text-gray-600 dark:text-gray-400 text-2xl hover:text-red-700 hover:dark:text-red-700">
              <SiYoutube />
            </h1>
          </a>
        </Link>
        <Link href="https://github.com/triyanox" passHref>
          <a target="_blank">
            <h1 className="text-gray-600 dark:text-gray-400 text-2xl hover:text-gray-900 hover:dark:text-gray-300">
              <SiGithub />
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
      </div>
    </section>
  );
};

export default Footer;
