import React, { useState, useEffect } from 'react';
import car1 from './assets/car1.jpeg';
import car2 from './assets/car2.jpeg';
import car3 from './assets/car3.jpeg';

const ImageCarousel = () => {
  const images = [car1, car2, car3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3>Image Carousel</h3>
      <img
        src={images[currentIndex]}
        alt={`carousel-${currentIndex}`}
        width="400"
        height="200"
        style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
      />
      <div style={{ marginTop: '12px' }}>
        <button
          onClick={prevImage}
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Previous
        </button>
        <button
          onClick={nextImage}
          style={{
            marginLeft: '10px',
            padding: '8px 16px',
            fontSize: '14px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
