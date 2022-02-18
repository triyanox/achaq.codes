import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <NextNProgress height={2} color="#007CF0" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
