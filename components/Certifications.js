import Link from "next/link";
const Certification = () => {
  return (
    <section className="container px-12 lg:px-24 flex flex-col justify-center  mt-16">
      <div className="relative flex justify-start items-start flex-col flex-1  ">
        <h1 className="font-bold text-2xl md:text-3xl tracking-tight mb-2 bg-gradient-to-r from-cyan-500 to-purple-800 top-0 text-transparent bg-clip-text">
          Certifications and Experiences{" "}
        </h1>
        <h3 className="text-gray-600 dark:text-gray-400 mb-2">
          Those are all my certifications and work experinces at the moment:
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-1 lg:gap-2 justify-center items-center px-auto mt-8">
        <div className="flex w-full justify-center items-center ">
          <Link
            href="https://www.freecodecamp.org/certification/achaq/responsive-web-design"
            passHref
          >
            <a
              target="_blank"
              className="cursor-pointer p-6 max-w-sm  rounded-xl  w-96 h-25  hover:scale-110 transition-all duration-500 active:scale-90"
            >
              <h1 className=" text-md  tracking-tight mb-2 bg-gradient-to-r from-cyan-500 to-purple-800 top-0 text-transparent bg-clip-text">
                Responsive Web Design
              </h1>
              <h3 className="mb-2 text-gray-800 dark:text-gray-300">
                FreeCodeCamp 2022
              </h3>
            </a>
          </Link>
        </div>
        <div className="flex w-full justify-center items-center ">
          <Link
            href="https://www.freecodecamp.org/certification/achaq/javascript-algorithms-and-data-structures"
            passHref
          >
            <a
              target="_blank"
              className="cursor-pointer p-6 max-w-sm  rounded-xl  w-96 h-25  hover:scale-110 transition-all duration-500 active:scale-90"
            >
              <h1 className=" text-md  tracking-tight mb-2 bg-gradient-to-r from-cyan-500 to-purple-800 top-0 text-transparent bg-clip-text">
                JavaScript Algorithms and Data Structures
              </h1>
              <h3 className="mb-2 text-gray-800 dark:text-gray-300">
                FreeCodeCamp 2021
              </h3>
            </a>
          </Link>
        </div>

        <div className="flex w-full justify-center items-center ">
          <Link
            href="https://www.freecodecamp.org/certification/achaq/front-end-development-libraries"
            passHref
          >
            <a
              target="_blank"
              className="cursor-pointer p-6 max-w-sm  rounded-xl  w-96 h-25  hover:scale-110 transition-all duration-500 active:scale-90 "
            >
              <h1 className=" text-md  tracking-tight mb-2 bg-gradient-to-r from-cyan-500 to-purple-800 top-0 text-transparent bg-clip-text">
                Front End Development Libraries
              </h1>
              <h3 className="mb-2 text-gray-800 dark:text-gray-300">
                FreeCodeCamp 2022
              </h3>
            </a>
          </Link>
        </div>
        <div className="flex w-full justify-center items-center ">
          <Link
            href="https://www.freecodecamp.org/certification/achaq/scientific-computing-with-python-v7"
            passHref
          >
            <a
              target="_blank"
              className="cursor-pointer p-6 max-w-sm  rounded-xl  w-96 h-25  hover:scale-110 transition-all duration-500 active:scale-90 "
            >
              <h1 className=" text-md  tracking-tight mb-2 bg-gradient-to-r from-cyan-500 to-purple-800 top-0 text-transparent bg-clip-text">
                Scientific Computing with Python
              </h1>
              <h3 className="mb-2 text-gray-800 dark:text-gray-300">
                FreeCodeCamp 2022
              </h3>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Certification;
