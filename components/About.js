import React from "react";
import {
  SiFirebase,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
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
  SiNumpy,
  SiMysql,
} from "react-icons/si/index.js";

const About = () => {
  return (
    <section className=" container flex justify-center items-center p-4 lg:p-12">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2  justify-between text-2xl gap-16">
        <div className="w-full text-black dark:text-white">
          <h1 className="text-2xl mb-8">Technologies and Tools I use</h1>
          <h2 className="text-lg">
            In terms of tools and technologies, software developement never been
            easy than before!
            <br />
            And those are tools and technologies I use !
          </h2>
        </div>
        <div className="mx-auto  grid grid-cols-6 md:grid-cols-11 lg:grid-cols-8 gap-8  text-black dark:text-white text-3xl">
          <div className="hover:text-orange-600 transition-all duration-500">
            <SiHtml5 />
          </div>
          <div className="hover:text-blue-600 transition-all duration-500">
            <SiCss3 />
          </div>
          <div className="hover:text-yellow-500 transition-all duration-500">
            <SiJavascript />
          </div>
          <div className="hover:text-blue-700 transition-all duration-500">
            <SiTypescript />
          </div>
          <div className="hover:text-yellow-600 transition-all duration-500">
            <SiPython />
          </div>
          <div className="hover:text-rose-600 transition-all duration-500">
            <SiNumpy />
          </div>
          <div className="hover:text-blue-700 transition-all duration-500">
            <SiMysql />
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
          <div className="hover:text-pink-600 transition-all duration-500">
            <SiSass />
          </div>
          <div className="hover:text-blue-500 transition-all duration-500">
            <SiTailwindcss />
          </div>
          <div className="hover:text-orange-500 transition-all duration-500">
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
          <div className="hover:text-orange-600 transition-all duration-500">
            <SiSvelte />
          </div>
          <div className="hover:text-yellow-600 transition-all duration-500">
            <SiTensorflow />
          </div>
          <div className="hover:text-red-700 transition-all duration-500">
            <SiGit />
          </div>
          <div className="hover:text-amber-500 transition-all duration-500">
            <SiFirebase />
          </div>
          <div className="hover:text-rose-600 transition-all duration-500">
            <SiAdobexd />
          </div>
          <div className="hover:text-blue-600 transition-all duration-500">
            <SiAdobephotoshop />
          </div>
          <div className="hover:text-orange-500 transition-all duration-500">
            <SiAdobeillustrator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
