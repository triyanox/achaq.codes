const BlogPrev = (props) => {
  return (
    <div className="relative flex w-full h-40 md:h-56 justify-center flex-col gap-y-8  hover:-translate-y-1 active:scale-90 transition-all duration-500 ">
      <div className="flex flex-col p-2">
        <div className="flex flex-row justify-between mb-2 ">
          <div className="text-xs text-black dark:text-white">{props.date}</div>
          <div className="text-xs text-black dark:text-white">
            {props.readTime + " min read"}
          </div>
        </div>
        <h1 className="text-xl  tracking-tight text-[#FF8552] dark:text-[#00DFD8] mb-2">
          {props.title}
        </h1>
        <h3 className=" text-xs text-black dark:text-white">
          {props.description}
        </h3>
      </div>
    </div>
  );
};

export default BlogPrev;
