import { RiSunLine } from "react-icons/ri/index.js";
import { MdOutlineDarkMode } from "react-icons/md/index.js";
import { ThemeContext } from "../themes/ThemeContext";
import { useContext } from "react";
import { motion } from "framer-motion";
const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <motion.div whileTap={{ scale: 0.7 }} transition={{ duration: 0.3 }}>
      {theme === "dark" ? (
        <button
          aria-label="Light Theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-black dark:text-white text-2xl cursor-pointer active:rotate-90 transition-all duration-500"
        >
          <RiSunLine />
        </button>
      ) : (
        <button
          aria-label="Dark Theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-black dark:text-white text-2xl cursor-pointer active:rotate-90 transition-all duration-500"
        >
          <MdOutlineDarkMode />
        </button>
      )}
    </motion.div>
  );
};

export default Toggle;
