import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}) => {
  const baseStyles = 'font-label font-extrabold uppercase tracking-widest rounded-sm transition-all duration-300';
  
  const variantStyles = {
    primary: 'bg-primary text-on-primary hover:translate-y-[-2px] shadow-xl shadow-primary/10 active:opacity-80',
    secondary: 'bg-surface-container text-on-surface hover:bg-surface-container-high',
    outline: 'border-2 border-primary text-primary hover:bg-primary/5',
  };

  const sizeStyles = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-10 py-5 text-md',
    lg: 'px-12 py-6 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
