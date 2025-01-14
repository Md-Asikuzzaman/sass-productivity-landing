"use client"
import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://via.placeholder.com/300x200?text=1',
  'https://via.placeholder.com/300x200?text=2',
  'https://via.placeholder.com/300x200?text=3',
  'https://via.placeholder.com/300x200?text=4',
];

const Slider = () => {
  return (
    <div className='w-full overflow-hidden'>
      <motion.div
        className='flex space-x-4'
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 10,
        }}
        style={{ display: 'inline-flex' }}
      >
        {/* Render images twice for seamless looping */}
        {[...images, ...images].map((image, index) => (
          <div key={index} className='flex-shrink-0 w-72'>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className='w-full h-auto rounded-lg shadow-md'
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
