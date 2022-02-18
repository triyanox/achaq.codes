import { BiLinkExternal } from "react-icons/bi";
import { BiCertification } from "react-icons/bi";
import Link from "next/link";

const CertificationCard = (props) => {
  return (
    <div className="flex w-full flex-col gap-y-8 h-48 justify-center md:p-4 lg:p-8">
      <div className="flex flex-row justify-between ">
        <div className="text-2xl text-gray-800 dark:text-gray-300">
          <BiCertification />
        </div>
        <div className="text-2xl text-gray-800 dark:text-gray-300">
          <Link href={`${props.link}`} passHref>
            <a target="_blank">
              <BiLinkExternal />
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-start justify-center">
        <h1 className="text-xl  tracking-tight mb-2 text-[#007CF0] dark:text-[#00DFD8]">
          {props.title}
        </h1>
        <h3 className="mb-2 text-gray-800 dark:text-gray-300">
          {props.source}
        </h3>
      </div>
    </div>
  );
};

export default CertificationCard;
