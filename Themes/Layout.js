import Head from "next/head";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Background from "./Background";
import { ThemeProvider } from "./ThemeContext";
import { ActiveProvider } from "../components/ActiveContext";
import { IsOpenProvider } from "../components/OpenContext";
import Footer from "../components/Footer";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="theme-color" content="Black" />
        <meta
          name="description"
          content="Full Stack Developer Based In Morocco"
        />
        <meta name="author" content="Achaq Codes" />
        <meta
          property="og:site_name"
          content={props.siteName}
          key="ogsitename"
        />
        <meta property="og:title" content={props.pageTitle} key="ogtitle" />
        <meta
          property="og:description"
          content={props.description}
          key="ogdesc"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, Typescript, NodeJs, Python"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://achaq.codes/" />
        <meta property="og:title" content="Welcome to my Portfolio !" />
        <meta
          property="og:description"
          content="Full Stack Developer Based In Morocco"
        />
        <meta property="og:image" content="/achaqcodes.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://achaq.codes/" />
        <meta property="twitter:title" content="Welcome to my Portfolio !" />
        <meta
          property="twitter:description"
          content="Full Stack Developer Based In Morocco"
        />
        <meta
          property="twitter:image"
          content="https://achaq.codes/achaqcodes.png"
        />

        <title>{props.pageTitle}</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <div className=" scroll-smooth py-12">
        <ThemeProvider>
          <Background>
            <ActiveProvider>
              <IsOpenProvider>
                <Header />
                {props.children}
                <MobileMenu />
              </IsOpenProvider>
              <Footer />
            </ActiveProvider>
          </Background>
        </ThemeProvider>
      </div>
    </div>
  );
};
export default Layout;
