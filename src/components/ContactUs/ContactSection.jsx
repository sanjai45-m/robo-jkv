import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './ContactSection.css';

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-hero">
        <h1>Contact us</h1>
        <p>Let's discuss how we can work together.</p>
      </div>
      <div className="contact-wrapper">
        <div className="contact-info-wrapper">
          <ContactInfo />
        </div>
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;