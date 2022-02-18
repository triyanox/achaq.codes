import { projectsdata } from "../data/projects";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

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
      className="container px-12 lg:px-24  flex-col mt-8 lg:mt-12 "
    >
      <div className=" flex justify-start items-center flex-col mt-0 lg:mt-4 ">
        <h1 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 bg-gradient-to-r from-[#007CF0] to-[#00DFD8]  text-transparent bg-clip-text">
          Projects
        </h1>
        <h3 className="text-gray-600 dark:text-gray-400 mb-2 text-center">
          All my projects and experiments !
        </h3>
      </div>
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <motion.div
          variants={stagger}
          className="grid grid-cols-1  lg:grid-cols-3 2xl:grid-cols-4 gap-y-4 mt-16 mb-12 lg:gap-y-8 "
        >
          {projectsdata.map((project) => (
            <motion.div variants={fadeInUp} key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                stack={project.stack}
                source={project.source}
                preview={project.preview}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
