import About from "../components/About";
import Certification from "../components/Certifications";
import TechStack from "../components/TechStack";
import Layout from "../Themes/Layout";
export default function Home() {
  return (
    <>
      <Layout
        pageTitle="Mohamed Achaq - Developer, Designer and Artist"
        description="Mohamed Achaq Full Stack Developer Based in Morocco"
        siteName="Achaq Codes"
      >
        <About />
        <TechStack />
        <Certification />
      </Layout>
    </>
  );
}
