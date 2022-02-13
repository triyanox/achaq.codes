import {
  SiFirebase,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiGit,
  SiGraphql,
  SiSvelte,
  SiTensorflow,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiD3Dotjs,
} from "react-icons/si";
const TechStack = () => {
  return (
    <section className="container h-full px-12 lg:px-24 flex flex-col justify-center  mt-16">
      <div className="relative flex justify-start items-start flex-col flex-1  ">
        <h1 className="font-bold text-2xl md:text-3xl tracking-tight mb-2 bg-gradient-to-r from-cyan-500 to-purple-800 top-0 text-transparent bg-clip-text">
          Technologies and Tools I use{" "}
        </h1>
        <h3 className="text-gray-600 dark:text-gray-400 ">
          In terms of tools and technologies, software developement never been
          easy than before!
        </h3>
        <h3 className="text-gray-600 dark:text-gray-400 mb-2 ">
          And those are tools and technologies I&apos;m good at :
        </h3>
      </div>
      <div className="mx-auto mt-12 grid grid-cols-8 lg:grid-cols-11 gap-6  text-gray-800 dark:text-gray-300 text-3xl">
        <div className="hover:text-orange-600 transition-all duration-500">
          <SiHtml5 />
        </div>
        <div className="hover:text-blue-600 transition-all duration-500">
          <SiCss3 />
        </div>
        <div className="hover:text-yellow-600 transition-all duration-500">
          <SiJavascript />
        </div>
        <div className="hover:text-blue-700 transition-all duration-500">
          <SiTypescript />
        </div>
        <div className="hover:text-yellow-600 transition-all duration-500">
          <SiPython />
        </div>
        <div className="hover:text-green-600 transition-all duration-500">
          <SiNodedotjs />
        </div>
        <div className="hover:text-cyan-600 transition-all duration-500">
          <SiReact />
        </div>
        <div className="hover:text-gray-700 transition-all duration-500">
          <SiNextdotjs />
        </div>
        <div className="hover:text-pink-800 transition-all duration-500">
          <SiSass />
        </div>
        <div className="hover:text-blue-500 transition-all duration-500">
          <SiTailwindcss />
        </div>
        <div className="hover:text-orange-600 transition-all duration-500">
          <SiD3Dotjs />
        </div>
        <div className="hover:text-gray-600 transition-all duration-500">
          <SiExpress />
        </div>
        <div className="hover:text-green-600 transition-all duration-500">
          <SiMongodb />
        </div>
        <div className="hover:text-rose-600 transition-all duration-500">
          <SiGraphql />
        </div>
        <div className="hover:text-purple-600 transition-all duration-500">
          <SiRedux />
        </div>
        <div className="hover:text-orange-700 transition-all duration-500">
          <SiSvelte />
        </div>
        <div className="hover:text-orange-600 transition-all duration-500">
          <SiTensorflow />
        </div>
        <div className="hover:text-red-700 transition-all duration-500">
          <SiGit />
        </div>
        <div className="hover:text-amber-500 transition-all duration-500">
          <SiFirebase />
        </div>
        <div className="hover:text-blue-600 transition-all duration-500">
          <SiFigma />
        </div>
        <div className="hover:text-blue-900 transition-all duration-500">
          <SiAdobephotoshop />
        </div>
        <div className="hover:text-orange-700 transition-all duration-500">
          <SiAdobeillustrator />
        </div>
      </div>
    </section>
  );
};
export default TechStack;
