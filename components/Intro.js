import React from "react";
import Link from "next/link";
const Intro = () => {
  return (
    <section className="container h-screen flex justify-center flex-col items-start p-16">
      <h1 className="text-3xl lg:text-5xl text-black dark:text-white mt-12 mb-8 ">
        Welcome
        <br />
        I&apos;m Mohamed Achaq
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-between text-2xl gap-8">
        <div className="flex flex-col gap-8 order-2 md:order-1">
          <div className="w-28 h-2 bg-black dark:bg-white rounded-xl"></div>
          <div className="w-36 h-2 bg-black dark:bg-white rounded-xl"></div>
          <div className="w-48 h-2 bg-black dark:bg-white rounded-xl"></div>
          <Link href="/contact" passHref>
            <button className="py-2 px-3 md:w-2/3 hover:-skew-y-3 text-black dark:text-white border-2  border-[#FF8552] dark:border-[#00DFD8] transition-all duration-400 active:scale-90 rounded-xl">
              Get in touch !
            </button>
          </Link>
        </div>
        <div className="flex flex-col text-md md:text-xl justify-center items-start  gap-5 text-black dark:text-white order-1 md:order-2 w-full">
          <h2 className="text-2xl">
            I&apos;m <span>full-stack developer</span>,{" "}
            <span>UI and UX designer</span> <span>and&nbsp;</span>
            <span>Artist</span>
            &nbsp;from Morocco !
          </h2>
          <p className="text-sm">
            <span className="mr-2 text-lg text-[#FF8552] dark:text-[#00DFD8] text-left leading-tight h-3">
              &ldquo;
            </span>
            Everyday is a marathon to learn programming to figure out how things
            works under the hood, to satisfy my curiosity and improve my skills
            as softwere developer !
            <span className="ml-2 text-lg text-[#FF8552] dark:text-[#00DFD8] text-left leading-tight h-3">
              &rdquo;
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
