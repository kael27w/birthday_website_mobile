import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import SectionWrapper from './SectionWrapper';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// Import all images from public directory
const images = [
  '/images/4E14D4E9-748D-41D0-A7CD-3AE82F281CBF.JPG',
  '/images/image000000.JPG',
  '/images/IMG_2834.jpeg',
  '/images/IMG_3258.jpeg',
  '/images/IMG_6127.JPG',
  '/images/IMG_7129.JPG'
];

function Picture() {
  const [loadedImages, setLoadedImages] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const textRef = useRef(null);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  const handleDragEnd = () => {
    setHasInteracted(true);
    // Animate text when it appears
    if (textRef.current) {
      gsap.fromTo(textRef.current,
        { 
          opacity: 0,
          scale: 0,
          rotate: -10
        },
        {
          opacity: 1,
          scale: 1,
          rotate: 6,
          duration: 0.8,
          ease: "back.out(1.7)"
        }
      );
    }
  };

  const allImagesLoaded = loadedImages === images.length;
  const showText = allImagesLoaded && hasInteracted;
  
  return (
    <SectionWrapper>
      {showText && (
        <Link to="/card">
          <p 
            ref={textRef}
            className="absolute text-4xl font-bold text-customBlue inset-0 flex justify-center items-center text-center cursor-pointer"
            style={{ opacity: 0 }}
          >
            You're Getting Old! :P
          </p>
        </Link>
      )}
      
      {!allImagesLoaded && (
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-xl font-medium text-gray-500">Loading images...</p>
        </div>
      )}

      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            allImagesLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            zIndex: images.length - index,
          }}
          initial={{
            scale: 1,
            rotate: Math.random() * 20 - 10,
          }}
          whileDrag={{
            scale: 1.05,
            rotate: Math.random() * 20 - 10,
          }}
          onDragEnd={handleDragEnd}
          drag
        >
          <img
            src={image}
            alt={`Stacked image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            onLoad={handleImageLoad}
          />
        </motion.div>
      ))}
    </SectionWrapper>
  );
}

export default Picture;