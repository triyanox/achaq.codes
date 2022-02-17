import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { coldarkCold } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ThemeContext } from "../Themes/ThemeContext";
import { useContext } from "react";

function highlighter(props) {
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
export default highlighter;
