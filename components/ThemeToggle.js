import { RiMoonClearLine } from "react-icons/ri";
import { BsSun } from "react-icons/bs";
import { ThemeContext } from "../Themes/ThemeContext";
import { useContext } from "react";
import { motion } from "framer-motion";
const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <motion.div whileTap={{ scale: 0.7 }} transition={{ duration: 0.2 }}>
      {theme === "dark" ? (
        <BsSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-800 dark:text-gray-300 text-2xl cursor-pointer active:rotate-90 transition-all duration-500"
        />
      ) : (
        <RiMoonClearLine
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-800 dark:text-gray-300 text-2xl cursor-pointer active:rotate-90 transition-all duration-500"
        />
      )}
    </motion.div>
  );
};

export default Toggle;
