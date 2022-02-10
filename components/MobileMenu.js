import Link from "next/link";
import Header from "./Header";
import { useContext } from "react";
import { ActiveContext } from "./ActiveContext";

function MobileMenu() {
  const [active, setActive] = useContext(ActiveContext);
  return (
    <>
      {active ? (
        <div className="w-full z-50 h-screen fixed bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60 backdrop-blur-xl pt-12 flex justify-center items-center flex-col m-0 top-0 bottom-0 overflow-y-hidden transition-opacity	 duration-500">
          <Header />
          <div className="text-center text-2xl  w-full px-3 pb-8   bg-gradient-to-r from-cyan-500 to-purple-800  text-transparent bg-clip-text  transition-opacity	 duration-600 ">
            <Link href="/">
              <a onClick={() => setActive(active === false ? true : false)}>
                Home
              </a>
            </Link>
          </div>
          <div className="text-center text-2xl  w-full px-3 pb-8   bg-gradient-to-r from-cyan-500 to-purple-800  text-transparent bg-clip-text transition-opacity	 duration-600  ">
            <Link href="/projects">
              <a onClick={() => setActive(active === false ? true : false)}>
                Projects
              </a>
            </Link>
          </div>
          <div className="text-center text-2xl  w-full px-3 pb-8   bg-gradient-to-r from-cyan-500 to-purple-800  text-transparent bg-clip-text  transition-opacity	 duration-600  ">
            <Link href="/contact">
              <a onClick={() => setActive(active === false ? true : false)}>
                Contact
              </a>
            </Link>
          </div>
          <div className="text-center text-2xl  w-full px-3 pb-8   bg-gradient-to-r from-cyan-500 to-purple-800  text-transparent bg-clip-text  transition-opacity	 duration-600  ">
            <Link href="/music">
              <a onClick={() => setActive(active === false ? true : false)}>
                Music
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <div />
      )}
    </>
  );
}

export default MobileMenu;
