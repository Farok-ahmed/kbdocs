import DefaultLayout from "@/components/layout";
import Banner from "@/components/page-sections/contact-page/banner";
import ContactForm from "@/components/page-sections/contact-page/contact-form";
import ContactInfo from "@/components/page-sections/contact-page/contact-info";

const ContactPage = () => {
  return (
    <DefaultLayout>
      <Banner />
      <section className="contact_area sec_pad">
        <div className="container">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ContactPage;
