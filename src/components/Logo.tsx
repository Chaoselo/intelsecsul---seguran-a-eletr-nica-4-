import React from 'react';
import logoImg from '../assets/images/logo.webp';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  heightPx?: number;
  widthPx?: number;
  opacity?: number; // 0 to 100
  alt?: string;
  src?: string;
  style?: React.CSSProperties;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  heightPx,
  widthPx,
  opacity = 100,
  className = '',
  alt = 'IntelSecSul - Segurança Eletrônica',
  src,
  style
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-13',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-28',
    custom: '',
  };

  const hasExplicitHeight = Boolean(heightPx || style?.height);
  const hasExplicitWidth = Boolean(widthPx || style?.width);

  return (
    <div className={`inline-flex items-center justify-center overflow-hidden rounded-md ${className}`}>
      <img
        src={src || logoImg}
        alt={alt}
        width={widthPx || 180}
        height={heightPx || 52}
        loading="eager"
        fetchPriority="high"
        style={{ 
          opacity: opacity / 100,
          ...(heightPx ? { height: `${heightPx}px` } : {}),
          ...(widthPx ? { width: `${widthPx}px` } : {}),
          ...style
        }}
        className={`${size === 'custom' || hasExplicitHeight ? '' : sizeClasses[size]} ${hasExplicitWidth ? '' : 'w-auto'} object-contain transition-transform duration-300 group-hover:scale-105`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
