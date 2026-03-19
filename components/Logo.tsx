
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10" }) => {
  return (
    <img 
      src="/logo.png" 
      alt="Cozinha Pet Logo" 
      className={`object-contain ${className}`}
    />
  );
};
