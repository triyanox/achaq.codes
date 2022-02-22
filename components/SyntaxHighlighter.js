import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { coldarkCold } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ThemeContext } from "../themes/ThemeContext";
import { useContext } from "react";

const Highlighter =(props)=> {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <SyntaxHighlighter
      language={props.language}
      style={theme === "dark" ? coldarkDark : coldarkCold}
    >
      {props.children}
    </SyntaxHighlighter>
  );
}
export default Highlighter;

