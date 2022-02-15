import Link from "next/link";
import { featuredProjects } from "../data/featured";
import { SiGithub } from "react-icons/si";
import { HiEye } from "react-icons/hi";
import Image from "next/image";
function Projects() {
  return (
    <section
      id="projects"
      className="container px-12 lg:px-24 flex flex-col justify-center  mt-16 mb-16"
    >
      <div className="relative flex justify-start items-start flex-col flex-1  ">
        <h1 className="font-bold text-2xl md:text-3xl tracking-tight mb-2 bg-gradient-to-r from-cyan-500 to-purple-800 top-0 text-transparent bg-clip-text">
          Featured Projects
        </h1>
        <h3 className="text-gray-600 dark:text-gray-400 mb-2">
          Check out my projects !
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-1 lg:gap-2 justify-center items-center px-auto mt-8">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col  justify-center items-center rounded-lg  "
          >
            <div className=" p-6 w-full max-w-sm rounded-lg h-25 ">
              <div>
                <Image
                  src={project.image}
                  width={1280}
                  height={800}
                  alt={project.title}
                />
                <div className="relative"></div>
              </div>
              <h1 className="text-md  tracking-tight  bg-gradient-to-r from-cyan-500 to-purple-800 top-0 text-transparent bg-clip-text">
                {project.title}{" "}
              </h1>
              <h3 className="mb-2 text-gray-800 dark:text-gray-300">
                {project.description}
              </h3>
              <div className="flex flex-row items-center text-sm gap-2 text-gray-500 dark:text-gray-500">
                {project.stack.map((tech) => (
                  <p key={project.id}>{tech}</p>
                ))}
              </div>
              <div className="flex w-full justify-between flex-row mt-4 items-center text-2xl gap-2 text-gray-500 dark:text-gray-500">
                <Link key={project.id} href={`${project.source}`} passHref>
                  <a
                    target="_blank"
                    className="flex  justify-center items-center w-full p-1  rounded-xl bg-gradient-to-r from-cyan-500 to-purple-400"
                  >
                    <button
                      className="flex  justify-center items-center w-full px-3 py-2  rounded-xl bg-white dark:bg-black"
                      aria-label="Source Code"
                    >
                      <SiGithub />
                    </button>
                  </a>
                </Link>
                <Link key={project.id} href={`${project.preview}`} passHref>
                  <a
                    target="_blank"
                    className="flex  justify-center items-center w-full p-1  rounded-xl bg-gradient-to-r from-cyan-500 to-purple-400"
                  >
                    <button
                      className="flex  justify-center items-center w-full px-3 py-1  rounded-xl bg-white dark:bg-black"
                      aria-label="Preview"
                    >
                      <HiEye />
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
