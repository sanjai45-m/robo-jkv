import './ContactInfo.css';

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="info-card">
        <h3>Contact Information</h3>
        <p className="info-subtitle">Fill out the form and we will get back to you within 24 hours.</p>
        
        <div className="info-items">
          <div className="info-item">
            <div className="icon-wrapper">
              <span className="material-icons">📍</span>
            </div>
            <div className="info-content">
              <h4>Our Location</h4>
              <p>No 93 A Villakadi koil Street,<br />kanchipuram-631501,Tamil Nadu ,India</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-wrapper">
              <span className="material-icons">📞</span>
            </div>
            <div className="info-content">
              <h4>Phone Number</h4>
              <p>+91 9944065972</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-wrapper">
              <span className="material-icons">✉️</span>
            </div>
            <div className="info-content">
              <h4>Email Address</h4>
              <p>yuvamtech.raj@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-wrapper">
              <span className="material-icons">⏰</span>
            </div>
            <div className="info-content">
              <h4>Working Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* <div className="social-links">
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Twitter</a>
          <a href="#" className="social-link">LinkedIn</a>
        </div> */}
      </div>
    </div>
  );
}

export default ContactInfo;