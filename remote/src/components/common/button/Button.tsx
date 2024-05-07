
import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className, ...rest }) => {
  return (
    <button onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
