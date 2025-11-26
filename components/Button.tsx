import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0";
  
  const variants = {
    primary: "bg-nutri-dark text-white shadow-xl hover:shadow-2xl hover:bg-[#143d24]",
    secondary: "bg-nutri-accent text-nutri-dark shadow-lg hover:bg-[#f3a040]",
    outline: "border-2 border-nutri-dark text-nutri-dark hover:bg-nutri-dark hover:text-white",
    white: "bg-white text-nutri-dark shadow-md hover:bg-gray-50",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};