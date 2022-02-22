import Link from "next/link";
import Header from "./Header";
import { useContext } from "react";
import { ActiveContext } from "./ActiveContext";
function MobileMenu() {
  const [active, setActive] = useContext(ActiveContext);

  return (
    <>
      {active ? (
        <div className="w-full  z-50 h-screen fixed bg-white dark:bg-black   pt-12 flex justify-center items-center flex-col m-0 top-0 bottom-0 overflow-hidden transition-all ease-in-out duration-300">
          <Header />

          <div className="text-center text-2xl w-full  p-3 mb-8  flex flex-col justify-center   text-black dark:text-white   ">
            <Link href="/">
              <a onClick={() => setActive(active === false ? true : false)}>
                Home
              </a>
            </Link>
          </div>
          <div className="text-center text-2xl  w-full p-3 mb-8   flex flex-col justify-center   text-black dark:text-white">
            <Link href="/projects">
              <a onClick={() => setActive(active === false ? true : false)}>
                Projects
              </a>
            </Link>
          </div>
          <div className="text-center text-2xl  w-full p-3 mb-8    flex flex-col justify-center   text-black dark:text-white">
            <Link href="/contact">
              <a onClick={() => setActive(active === false ? true : false)}>
                Contact
              </a>
            </Link>
          </div>
          <div className="text-center text-2xl  w-full p-3 mb-8    flex flex-col justify-center   text-black dark:text-white">
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
