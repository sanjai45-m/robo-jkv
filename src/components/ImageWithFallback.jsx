import { useState } from 'react';

const ImageWithFallback = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  const fallbackImage = 'https://images.unsplash.com/photo-1581092160607-ee22731c2f54?w=800&auto=format&fit=crop';

  return (
    <img
      src={error ? fallbackImage : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

export default ImageWithFallback;