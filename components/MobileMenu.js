import Link from "next/link";
import Header from "./Header";
import { useContext } from "react";
import { ActiveContext } from "./ActiveContext";

function MobileMenu() {
  const [active, setActive] = useContext(ActiveContext);
  return (
    <>
      {active ? (
        <div className="w-full z-50 h-screen fixed bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 backdrop-blur-xl pt-12 flex justify-center items-center flex-col m-0 top-0 bottom-0 overflow-y-hidden transition-all	 duration-500">
          <Header />
          <div className="text-center text-2xl  w-full px-3 pb-8   text-[#007CF0] dark:text-[#00DFD8]  transition-opacity	 duration-600 ">
            <Link href="/">
              <a onClick={() => setActive(active === false ? true : false)}>
                Home
              </a>
            </Link>
          </div>
          <div className="text-center text-2xl  w-full px-3 pb-8   text-[#007CF0] dark:text-[#00DFD8] transition-opacity	 duration-600  ">
            <Link href="/projects">
              <a onClick={() => setActive(active === false ? true : false)}>
                Projects
              </a>
            </Link>
          </div>
          <div className="text-center text-2xl  w-full px-3 pb-8   text-[#007CF0] dark:text-[#00DFD8]  transition-opacity	 duration-600  ">
            <Link href="/contact">
              <a onClick={() => setActive(active === false ? true : false)}>
                Contact
              </a>
            </Link>
          </div>
          <div className="text-center text-2xl  w-full px-3 pb-8   text-[#007CF0] dark:text-[#00DFD8]  transition-opacity	 duration-600  ">
            <Link href="/blog">
              <a onClick={() => setActive(active === false ? true : false)}>
                Blog
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
