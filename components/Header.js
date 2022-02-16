import Link from "next/link";
import Toggle from "./ThemeToggle";
import { useContext } from "react";
import { ActiveContext } from "./ActiveContext";

function Header() {
  const [active, setActive] = useContext(ActiveContext);
  return (
    <section className="p-2 mt-0 fixed h-12 w-full z-20 top-0  ">
      <div>
        <nav className="bg-opacity-90 dark:bg-opacity-90 backdrop-blur-xl p-3 flex items-center flex-row px-8 mx-2 lg:mx-12 rounded-3xl h-12">
          <div className=" w-full lg:inline-flex  hidden lg:visible">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 pb-8 pt-12 lg:pb-0 lg:pt-0 text-gray-800 dark:text-gray-300  items-centertext-opacity-80justify-center active:scale-90 duration-500 ">
                Home
              </a>
            </Link>
            <Link href="/projects">
              <a className="lg:inline-flex lg:w-auto w-full px-3 pb-8 lg:pb-0  text-gray-800 dark:text-gray-300    items-center justify-center active:scale-90 duration-500">
                Projects
              </a>
            </Link>
            <Link href="/contact">
              <a className="lg:inline-flex lg:w-auto w-full px-3 pb-8  lg:pb-0  text-gray-800 dark:text-gray-300  items-center justify-center active:scale-90 duration-500">
                Contact
              </a>
            </Link>
            <Link href="/blog">
              <a className="lg:inline-flex lg:w-auto w-full px-3 pb-8  lg:pb-0  text-gray-800 dark:text-gray-300  items-center justify-center active:scale-90 duration-500">
                Blog
              </a>
            </Link>
            <Link href="/music">
              <a className="lg:inline-flex lg:w-auto w-full px-3 pb-8 lg:pb-0   text-gray-800 dark:text-gray-300  items-center justify-center active:scale-90 duration-500">
                Music
              </a>
            </Link>
          </div>
          <button
            aria-label="Menu Switch"
            onClick={() => setActive(active === false ? true : false)}
            className="w-full bg-transparent dark:bg-transparent  backdrop-blur-xl visible lg:hidden text-gray-800 dark:text-gray-300 "
          >
            {!active ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 active:rotate-90 transition-all duration-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 active:rotate-90 transition-all duration-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
          <Toggle />
        </nav>
      </div>
    </section>
  );
}

export default Header;
