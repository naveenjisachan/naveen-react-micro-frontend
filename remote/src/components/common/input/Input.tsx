import React from 'react';
import './Input.css';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: any) => void;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, onKeyDown, placeholder, className, ...rest }) => {
  return <input type="text" value={value} className={className} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} {...rest} />;
};

export default Input;
