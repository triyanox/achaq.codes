import dev from "../assets/dev.png";
import Image from "next/image";
const About = () => {
  return (
    <section
      id="about"
      className="container h-screen px-12 lg:px-24 flex justify-center items-center flex-col-reverse lg:flex-row mt-8 lg:-mt-2 "
    >
      <div className="relative mt-8 md:mt-0 flex justify-start items-start flex-col flex-1  ">
        <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-2 bg-gradient-to-r from-cyan-500 to-purple-800 top-0 text-transparent bg-clip-text">
          Welcome to my Portfolio
        </h1>
        <h2 className="text-gray-800 text-md md:text-2xl dark:text-gray-300 mb-2">
          I&apos;m Mohamed Achaq and I&apos;m{" "}
          <span className="underline  decoration-cyan-500 decoration-2">
            full-stack developer
          </span>
          ,{" "}
          <span className="underline  decoration-purple-800 decoration-2">
            UI/UX designer
          </span>{" "}
          <span>and&nbsp;</span>
          <span className="underline  decoration-green-500 decoration-2">
            Artist
          </span>
          &nbsp;from Morocco !
        </h2>
        <p className="text-sm lg:text-md text-gray-600 dark:text-gray-400">
          Everyday is a marathon to learn programming to figure out how things
          works under the hood, to satisfy my curiosity and improve my skills as
          softwere developer !
        </p>
      </div>
      <div className="relative flex justify-center items-center lg:flex-1 mt-12 md:mt-4 mb-8">
        <div className="flex justify-center items-center rounded-full  ">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply  filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply  filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-800  rounded-full mix-blend-multiply  filter blur-xl opacity-70 animate-pulse"></div>
          <Image src={dev} width={800} height={690.41} alt="Developer" />
        </div>
      </div>
    </section>
  );
};

export default About;
