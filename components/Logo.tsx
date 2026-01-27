import React from 'react';

const Logo: React.FC = () => (
  <div className="relative group flex items-center justify-center">
    {/* Outer Glow Effect */}
    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
    
    <svg 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-10 w-auto md:h-12 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] group-hover:scale-105"
      aria-labelledby="logoTitle"
      role="img"
    >
      <title id="logoTitle">אופקים הנדסה - דיוק יוקרתי</title>
      <defs>
        {/* Deep Luxury Metallic Gradient */}
        <linearGradient id="luxuryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>

        {/* Shimmer Effect Filter */}
        <filter id="shimmer">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
        </filter>
      </defs>
      
      {/* Outer Hexagonal Frame - Luxurious structure */}
      <path 
        d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z" 
        fill="none" 
        stroke="white" 
        strokeWidth="0.5" 
        strokeOpacity="0.1" 
      />
      
      {/* Precision Compass / Engineering Triangle */}
      <path 
        d="M50 18 L82 78 L18 78 Z" 
        fill="none" 
        stroke="url(#luxuryGradient)" 
        strokeWidth="4" 
        strokeLinejoin="round" 
        className="animate-pulse"
      />
      
      {/* Inner Precision Crosshair */}
      <path 
        d="M50 18 L50 78 M18 78 L82 78 M35 48 L65 48" 
        fill="none" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeOpacity="0.6"
      />

      {/* Vertex Diamonds - For that "Luxury Jewel" feel */}
      <rect x="47" y="15" width="6" height="6" transform="rotate(45 50 18)" fill="white" className="filter drop-shadow-sm" />
      <rect x="79" y="75" width="6" height="6" transform="rotate(45 82 78)" fill="white" />
      <rect x="15" y="75" width="6" height="6" transform="rotate(45 18 78)" fill="white" />
      
      {/* Center Plumb Point */}
      <circle cx="50" cy="48" r="3" fill="#3b82f6" className="animate-ping opacity-75" />
      <circle cx="50" cy="48" r="2" fill="white" />
    </svg>
    
    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes shimmer-move {
        0% { transform: translateX(-100%) skewX(-20deg); }
        100% { transform: translateX(200%) skewX(-20deg); }
      }
      .luxury-shimmer {
        position: relative;
        overflow: hidden;
      }
      .luxury-shimmer::after {
        content: "";
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        animation: shimmer-move 3s infinite;
      }
    `}} />
  </div>
);

export default Logo;