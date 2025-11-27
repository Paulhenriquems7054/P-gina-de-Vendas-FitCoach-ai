import React, { useState } from 'react';

export const Logo: React.FC<{ size?: number; className?: string; showText?: boolean; useImage?: boolean; imageSrc?: string }> = ({ 
  size = 24, 
  className = "", 
  showText = false,
  useImage = false,
  imageSrc // Se não especificado, tenta vários nomes possíveis
}) => {
  // Lista de possíveis nomes de arquivo do logo
  const possibleLogos = imageSrc 
    ? [imageSrc] 
    : ['/ic_launcher.png', '/logo.png', '/logo.svg', '/icon-192.png', '/FITCOACH.IA.png', '/fitcoach-logo.png'];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState(possibleLogos[0]);

  // Se useImage for true, sempre tentar usar a imagem
  if (useImage) {
    return (
      <img 
        src={imgSrc} 
        alt="Fitcoach.ia Logo" 
        width={size} 
        height={size}
        className={className}
        style={{ 
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          display: 'block'
        }}
        onError={(e) => {
          // Tentar próximo arquivo da lista
          const nextIndex = currentIndex + 1;
          if (nextIndex < possibleLogos.length) {
            setCurrentIndex(nextIndex);
            setImgSrc(possibleLogos[nextIndex]);
          } else {
            console.warn('Nenhuma imagem de logo encontrada. Tentou:', possibleLogos);
          }
        }}
      />
    );
  }

  // SVG fallback (código existente)
  const uniqueId = `logo-${size}-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <svg 
      width={size} 
      height={showText ? size * 1.4 : size} 
      viewBox={showText ? "0 0 120 140" : "0 0 120 120"} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Neon gradient: bright cyan-blue (left) to vivid green (right) */}
        <linearGradient id={`neonGrad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00D9FF" stopOpacity="1" />
          <stop offset="30%" stopColor="#00E6CC" stopOpacity="1" />
          <stop offset="60%" stopColor="#00FFB3" stopOpacity="1" />
          <stop offset="100%" stopColor="#00FF88" stopOpacity="1" />
        </linearGradient>
        
        {/* Metallic gradient for torso */}
        <linearGradient id={`metallicGrad-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A5568" stopOpacity="0.95" />
          <stop offset="30%" stopColor="#2D3748" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#1A202C" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#2D3748" stopOpacity="0.9" />
        </linearGradient>
        
        {/* Text gradient - metallic with depth */}
        <linearGradient id={`textGrad-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#CBD5E0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#A0AEC0" stopOpacity="0.85" />
        </linearGradient>
        
        {/* Glow filter for neon arc */}
        <filter id={`glow-${uniqueId}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Neon arc - C shape wrapping upper torso, vibrant and glowing */}
      <path
        d="M15 60 Q15 25, 60 25 Q105 25, 105 60"
        stroke={`url(#neonGrad-${uniqueId})`}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        filter={`url(#glow-${uniqueId})`}
        opacity="1"
      />
      
      {/* Torso - metallic dark grey with sculpted appearance */}
      <g>
        {/* Main torso shape - chest to waist, broader at top and bottom */}
        <path
          d="M35 42 
             Q35 48, 35 54 
             Q35 62, 42 66 
             Q50 68, 58 66 
             Q65 62, 65 54 
             Q65 48, 65 42
             Q65 36, 58 34
             Q50 32, 42 34
             Z"
          fill={`url(#metallicGrad-${uniqueId})`}
        />
        
        {/* Subtle highlight on upper torso for metallic reflection */}
        <ellipse cx="50" cy="40" rx="12" ry="6" fill="white" opacity="0.15"/>
        
        {/* Chest/pectoral area definition */}
        <ellipse cx="50" cy="42" rx="13" ry="8" fill="none" stroke="#1A202C" strokeWidth="0.5" opacity="0.3"/>
        
        {/* Abdominal definition lines - subtle horizontal lines */}
        <line x1="40" y1="50" x2="60" y2="50" stroke="#1A202C" strokeWidth="1.2" opacity="0.25"/>
        <line x1="41" y1="54" x2="59" y2="54" stroke="#1A202C" strokeWidth="1.2" opacity="0.25"/>
        <line x1="42" y1="58" x2="58" y2="58" stroke="#1A202C" strokeWidth="1.2" opacity="0.25"/>
        
        {/* Pectoral curves - subtle definition */}
        <path d="M40 42 Q43 44, 46 42" stroke="#1A202C" strokeWidth="1" fill="none" opacity="0.2"/>
        <path d="M54 42 Q57 44, 60 42" stroke="#1A202C" strokeWidth="1" fill="none" opacity="0.2"/>
      </g>
      
      {/* Neon glow accent on torso edges - subtle highlight from arc */}
      <path
        d="M35 42 Q35 48, 35 54"
        stroke={`url(#neonGrad-${uniqueId})`}
        strokeWidth="2"
        fill="none"
        opacity="0.4"
        strokeLinecap="round"
      />
      <path
        d="M65 42 Q65 48, 65 54"
        stroke={`url(#neonGrad-${uniqueId})`}
        strokeWidth="2"
        fill="none"
        opacity="0.4"
        strokeLinecap="round"
      />
      
      {/* Chest area subtle neon highlight */}
      <ellipse cx="50" cy="42" rx="13" ry="6" fill={`url(#neonGrad-${uniqueId})`} opacity="0.1"/>
      
      {/* Text "FITCOACH.IA" below if showText is true */}
      {showText && (
        <g>
          <text
            x="60"
            y="125"
            fontSize="16"
            fontWeight="700"
            fill={`url(#textGrad-${uniqueId})`}
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
            letterSpacing="1.2"
            opacity="0.95"
          >
            FITCOACH.IA
          </text>
        </g>
      )}
    </svg>
  );
};
