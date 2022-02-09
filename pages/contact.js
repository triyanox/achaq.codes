import ContactForm from "../components/ContactForm";
import Layout from "../Themes/Layout";
export default function Contact() {
  return (
    <>
      <Layout
        pageTitle="Contact | Achaq Codes"
        description="Contact Page for Achaq Codes"
        siteName="Achaq Codes"
      >
        <ContactForm />
      </Layout>
    </>
  );
}
