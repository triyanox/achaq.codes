import { projectsdata } from "../data/projects";
import { SiGithub } from "react-icons/si";
import { HiEye } from "react-icons/hi";
import Link from "next/link";
import { motion } from "framer-motion";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Projects() {
  return (
    <section
      id="projects"
      className="container px-12 lg:px-24 flex flex-col justify-center  mt-12 mb-20  scroll-mt-20"
    >
      <div className="relative flex justify-start items-start flex-col flex-1  ">
        <h1 className="font-bold text-2xl md:text-3xl tracking-tight mb-2 bg-gradient-to-r from-cyan-500 to-purple-800 top-0 text-transparent bg-clip-text">
          Featured Projects
        </h1>
        <h3 className="text-gray-400 dark:text-gray-400 mb-2">
          Check ou my projects !
        </h3>
      </div>
      <motion.div variants={stagger}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2 justify-center items-center px-auto mt-8">
          {projectsdata.map((project) => (
            <motion.div
              key={project.id}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.2,
              }}
              className="flex w-full justify-center items-center "
            >
              <div className=" p-6 max-w-sm w-full h-25 rounded-lg">
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
                <div className="flex flex-row mt-4 items-center text-2xl gap-2 text-gray-800 dark:text-gray-300">
                  <Link key={project.id} href={`${project.source}`} passHref>
                    <a target="_blank">
                      <button>
                        <SiGithub />
                      </button>
                    </a>
                  </Link>
                  <Link key={project.id} href={`${project.preview}`} passHref>
                    <a target="_blank">
                      <button>
                        <HiEye />
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
