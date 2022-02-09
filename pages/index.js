import About from "../components/About";
import Certification from "../components/Certifications";
import Projects from "../components/ProjectsList";
import TechStack from "../components/TechStack";
import Layout from "../Themes/Layout";
export default function Home() {
  return (
    <>
      <Layout
        pageTitle="Home | Achaq Codes"
        description="Mohamed Achaq Full Stack Developer Based in Morocco"
        siteName="Achaq Codes"
      >
        <About />
        <TechStack />
        <Certification />
        <Projects />
      </Layout>
    </>
  );
}
