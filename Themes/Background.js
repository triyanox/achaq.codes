const Background = ({ children }) => {
  return (
    <body className="bg-white dark:bg-black scroll-smooth duration-300 ">
      {children}
    </body>
  );
};

export default Background;
