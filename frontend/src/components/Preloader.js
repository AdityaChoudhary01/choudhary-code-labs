import React from 'react';
import { Html } from '@react-three/drei';

const Preloader = () => {
  return (
    <Html center>
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    </Html>
  );
};

export default Preloader;
