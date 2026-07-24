import React from 'react';

export const GeometricPattern = ({
  className = '',
  opacity = 0.07,
  color = '#CDAA7D'
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        className="w-full h-full"
        style={{ opacity }}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="islamic-star-pattern"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* 8-pointed star Islamic rosette */}
            <path
              d="M40 0 L50 25 L75 15 L65 40 L90 50 L65 60 L75 85 L50 75 L40 100 L30 75 L5 85 L15 60 L-10 50 L15 40 L5 15 L30 25 Z"
              fill="none"
              stroke={color}
              strokeWidth="1.2"
            />
            <path
              d="M40 15 L47 30 L62 25 L55 40 L70 47 L55 55 L62 70 L47 65 L40 80 L33 65 L18 70 L25 55 L10 47 L25 40 L18 25 L33 30 Z"
              fill="none"
              stroke={color}
              strokeWidth="0.8"
            />
            <circle cx="40" cy="40" r="8" fill="none" stroke={color} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-star-pattern)" />
      </svg>
    </div>
  );
};
