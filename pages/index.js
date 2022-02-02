import About from "../components/About";
import Certification from "../components/Certifications";
import Projects from "../components/ProjectsList";
import TechStack from "../components/TechStack";
import Layout from "../Themes/Layout";
export default function Home() {
  return (
    <>
      <Layout
        pageTitle="Home"
        description="Achaq Portfolio"
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
