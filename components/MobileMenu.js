import Link from "next/link";
import Header from "./Header";
import { useContext } from "react";
import { ActiveContext } from "./ActiveContext";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function MobileMenu() {
  const [active, setActive] = useContext(ActiveContext);
  return (
    <>
      {active ? (
        <div className="w-full z-50 h-screen fixed bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 backdrop-blur-xl pt-12 flex justify-center items-center flex-col m-0 top-0 bottom-0 overflow-y-hidden transition duration-500">
          <Header />

          <Link href="/">
            <a
              onClick={() => setActive(active === false ? true : false)}
              className="text-center text-2xl  w-full px-3 pb-8   bg-gradient-to-r from-cyan-500 to-purple-800  text-transparent bg-clip-text active:scale-90 "
            >
              Home
            </a>
          </Link>
          <Link href="/#projects">
            <a
              onClick={() => setActive(active === false ? true : false)}
              className="text-center text-2xl  w-full px-3 pb-8   bg-gradient-to-r from-cyan-500 to-purple-800  text-transparent bg-clip-text active:scale-90 "
            >
              Projects
            </a>
          </Link>
          <Link href="/contact">
            <a
              onClick={() => setActive(active === false ? true : false)}
              className="text-center text-2xl  w-full px-3 pb-8   bg-gradient-to-r from-cyan-500 to-purple-800  text-transparent bg-clip-text active:scale-90 "
            >
              Contact
            </a>
          </Link>
          <Link href="/music">
            <a
              onClick={() => setActive(active === false ? true : false)}
              className="text-center text-2xl  w-full px-3 pb-8   bg-gradient-to-r from-cyan-500 to-purple-800  text-transparent bg-clip-text active:scale-90 "
            >
              Music
            </a>
          </Link>
        </div>
      ) : (
        <div />
      )}
    </>
  );
}

export default MobileMenu;
