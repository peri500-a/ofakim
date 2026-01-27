
import React from 'react';

const Logo: React.FC = () => (
  <svg 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-10 w-auto"
    aria-labelledby="logoTitle"
    role="img"
  >
    <title id="logoTitle">אופקים הנדסה - דיוק והנדסה</title>
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    
    {/* Background Circle for structure */}
    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" />
    
    {/* Geometric Engineering Symbol (Stylized 'O' and 'A' / Compass) */}
    <path 
      d="M50 15 L85 80 L15 80 Z" 
      fill="none" 
      stroke="url(#logoGradient)" 
      strokeWidth="6" 
      strokeLinejoin="round" 
    />
    
    {/* Horizontal Measuring Line */}
    <path 
      d="M30 60 L70 60" 
      fill="none" 
      stroke="#ffffff" 
      strokeWidth="2" 
      strokeLinecap="round"
      className="opacity-50"
    />
    
    {/* Central Vertical Line (Plumb line) */}
    <path 
      d="M50 15 L50 45" 
      fill="none" 
      stroke="#ffffff" 
      strokeWidth="4" 
      strokeLinecap="round"
    />

    {/* Small dots representing measurement points */}
    <circle cx="50" cy="15" r="3" fill="#ffffff" />
    <circle cx="85" cy="80" r="3" fill="#ffffff" />
    <circle cx="15" cy="80" r="3" fill="#ffffff" />
  </svg>
);

export default Logo;
