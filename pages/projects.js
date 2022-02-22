import Projects from "../components/Projects";
import Layout from "../themes/Layout";

export default function ProjectsPage() {
  return (
    <>
      <Layout
        pageTitle="Projects - Mohamed Achaq"
        description="Achaq Portfolio"
        siteName="Achaq Codes"
      >
        <Projects />
      </Layout>
    </>
  );
}
