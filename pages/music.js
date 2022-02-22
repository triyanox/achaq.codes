import About from "../components/About";
import Certification from "../components/Certifications";
import MusicComponent from "../components/MusicComponent";
import Projects from "../components/ProjectsList";
import TechStack from "../components/TechStack";
import Layout from "../Themes/Layout";
export default function Home() {
  return (
    <>
      <Layout
        pageTitle="Music"
        description="Achaq Portfolio"
        siteName="Achaq Codes"
      >
        <MusicComponent />
      </Layout>
    </>
  );
}
