import About from "../components/About";
import Certifications from "../components/Certifications";
import Intro from "../components/Intro";
import Layout from "../themes/Layout";

export default function Home() {
  return (
    <Layout
      pageTitle="Mohamed Achaq - Developer, Designer and Artist"
      description="Mohamed Achaq Full Stack Developer Based in Morocco"
      siteName="Achaq Codes"
    >
      <Intro />
      <About />
      <Certifications />
    </Layout>
  );
}
