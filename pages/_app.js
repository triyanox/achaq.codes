import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress height={2} color="#FE938C" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
