const Background = ({ children }) => {
  return (
    <body className="bg-white dark:bg-black transition duration-300 ">
      {children}
    </body>
  );
};

export default Background;
