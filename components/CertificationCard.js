import Link from "next/link";
import { BiCertification } from "react-icons/bi";
import { CgChevronRight } from "react-icons/cg";
const CertificationCard = (props) => {
  return (
    <div className="flex flex-col gap-1 items-start justify-center p-4">
      <div className="flex flex-row gap-2 text-md md:text-lg  tracking-tight mb-1 text-black dark:text-white justify-center items-center">
        <div className=" text-[#FF8552] dark:text-[#00DFD8]">
          <BiCertification />
        </div>{" "}
        {props.title}
      </div>

      <Link href={props.link} passHref>
        <a
          target="_blank"
          className="text-sm md:text-md flex items-center gap-2  hover:text-[#FF8552] dark:hover:text-[#00DFD8] text-black dark:text-white transition duration-400 active:scale-90"
        >
          <CgChevronRight />
          See Credentials
        </a>
      </Link>
    </div>
  );
};

export default CertificationCard;
