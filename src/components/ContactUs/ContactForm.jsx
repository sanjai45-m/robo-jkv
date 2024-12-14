import { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: '', // Updated to match emailjs field name
    reply_to: '',  // Updated to match emailjs field name
    subject: '',
    message: '',
  });

  const [emailConfig, setEmailConfig] = useState(null);
  const form = useRef(null);

  // Fetch email configuration using HTTP request
  useEffect(() => {
    const fetchEmailConfig = async () => {
      try {
        const response = await fetch(
          'https://snews-8ed67-default-rtdb.asia-southeast1.firebasedatabase.app/mails.json'
        );
        const data = await response.json();
        setEmailConfig(data);
      } catch (error) {
        console.error('Error fetching email config:', error);
        toast.error('Failed to load email configuration', {
          position: 'top-center',
          autoClose: 5000,
        });
      }
    };

    fetchEmailConfig();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current || !emailConfig) return;

    emailjs
      .sendForm(
        emailConfig.serviceId, // Dynamically use service ID from Firebase
        emailConfig.emailTemplate, // Dynamically use email template ID from Firebase
        form.current,
        emailConfig['api-key'] // Dynamically use API key from Firebase
      )
      .then(
        () => {
          setFormData({ from_name: '', reply_to: '', subject: '', message: '' }); // Reset formData
          toast.success('Message sent successfully!', {
            position: 'top-center',
            autoClose: 3000,
          });
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}`, {
            position: 'top-center',
            autoClose: 5000,
          });
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <h2>Send us a Message</h2>
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="from_name" // Matches emailjs field name
              placeholder="Name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="reply_to" // Matches emailjs field name
              placeholder="email@example.com"
              value={formData.reply_to}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="How can we help?"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
          />
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>

      {/* Add ToastContainer here */}
      <ToastContainer />
    </div>
  );
}

export default ContactForm;
