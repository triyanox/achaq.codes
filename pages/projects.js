import ProjectsPage from "../components/ProjectsPage";
import Layout from "../Themes/Layout";
export default function Home() {
  return (
    <>
      <Layout
        pageTitle="Projects"
        description="Achaq Portfolio"
        siteName="Achaq Codes"
      >
        <ProjectsPage />
      </Layout>
    </>
  );
}
