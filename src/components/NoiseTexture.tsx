import React from 'react';

const NoiseTexture = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
    <filter id='noiseFilter'>
      <feTurbulence 
        type='fractalNoise' 
        baseFrequency='0.6' 
        stitchTiles='stitch'
        numOctaves='2'
      />
    </filter>
    <rect
      width='100%'
      height='100%'
      filter='url(#noiseFilter)'
    />
  </svg>
);

export default NoiseTexture;
