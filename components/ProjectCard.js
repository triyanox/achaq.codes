import { BsFolderFill } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";

const ProjectCard = (props) => {
  return (
    <div className="flex w-full flex-col gap-8 h-68 justify-center p-8 ">
      <div className="flex flex-row justify-between ">
        <div className="text-2xl text-black dark:text-white">
          <BsFolderFill />
        </div>
        <div className="flex flex-row gap-4 text-2xl text-black dark:text-white">
          <Link key={props.id} href={`${props.source}`} passHref>
            <a target="_blank">
              <button aria-label="Source Code">
                <FiGithub />
              </button>
            </a>
          </Link>
          <Link key={props.id} href={`${props.preview}`} passHref>
            <a target="_blank">
              <button aria-label="Preview">
                <BiLinkExternal />
              </button>
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start justify-center">
        <h1 className="text-xl  tracking-tight mb-2 text-[#FF8552] dark:text-[#00DFD8]">
          {props.title}
        </h1>
        <h3 className="mb-2 text-black dark:text-white">{props.description}</h3>
      </div>
      <div className="flex flex-row items-center text-sm gap-2 text-gray-500 dark:text-gray-500">
        {props.stack.map((tech, i) => (
          <p key={i}>{tech}</p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
