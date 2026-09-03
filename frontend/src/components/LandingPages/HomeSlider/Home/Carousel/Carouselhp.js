import React, {useState, useEffect}from 'react';
import Img1 from '../Images/basket1.png';
import Img2 from '../Images/IMG-20230924-WA0010.jpg';
import './Carouselhp.css';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Img1, Img2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, images.length]);

  return (
    <div className="carousel-home">

      <img
        className="carousel-image-home"
        src={Img1}
        alt={`carousel`}
        />
    </div>
  );
}

export default Carousel;
