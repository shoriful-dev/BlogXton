import React from 'react';

interface ImageProps {
  className?: string;
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ className = '', src, alt }) => {
  return (
    <img className={`bg-no-repeat bg-cover bg-center ${className}`} src={src} alt={alt} />
  );
};

export default Image;
