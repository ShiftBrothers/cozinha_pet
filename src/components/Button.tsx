import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand-blue text-white hover:bg-brand-blueDark active:bg-brand-blueDark/90',
  secondary: 'bg-white text-brand-blue border-2 border-brand-blue hover:bg-brand-blueLight active:bg-brand-blueLight/80',
  danger: 'bg-brand-red text-white hover:bg-brand-redDark active:bg-brand-redDark/90',
  outline: 'bg-transparent text-neutral-900 border-2 border-neutral-300 hover:bg-neutral-50 active:bg-neutral-100',
  ghost: 'bg-transparent text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-2xl',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      disabled={disabled || isLoading}
      className={`
        font-bold transition-all duration-200 flex items-center justify-center gap-2
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue
        active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      {isLoading && <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />}
      {children}
    </button>
  );
};
