import ContactForm from "../components/Contact";
import Layout from "../themes/Layout";

export default function ContactPage() {
  return (
    <>
      <Layout
        pageTitle="Contact - Mohamed Achaq"
        description="Achaq Portfolio"
        siteName="Achaq Codes"
      >
        <ContactForm />
      </Layout>
    </>
  );
}
