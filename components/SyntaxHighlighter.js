import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ThemeContext } from "../Themes/ThemeContext";
import { useContext } from "react";

function highlighter(props) {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <SyntaxHighlighter
      language={props.language}
      style={theme === "dark" ? materialDark : materialLight}
    >
      {props.children}
    </SyntaxHighlighter>
  );
}
export default highlighter;
