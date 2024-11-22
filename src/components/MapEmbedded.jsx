import React from 'react';

const MapEmbed = () => {
  return (
    <div className="map-container" style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.7893187053855!2d79.70339761172382!3d12.823947410948353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c2f0787ca6cd%3A0x9cd6c3321d0a9b03!2s93a%2C%20Vilakadi%20Koil%20St%2C%20Ennaikaran%2C%20Kanchipuram%2C%20Tamil%20Nadu%20631501!5e1!3m2!1sen!2sin!4v1732087631314!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{
          border: '0',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
