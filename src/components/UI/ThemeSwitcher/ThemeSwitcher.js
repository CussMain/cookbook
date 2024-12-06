import React from 'react';
import './ThemeSwitcher.css';

const CheckboxComponent = ({ text, onChange, checked}) => {

  const handleChange = (value) => {
    onChange(value.target.checked);
  };

  return (
    <div className="themeswitcher-ui-component">
      <input 
        type="checkbox" 
        checked={checked}
        onChange={handleChange}
      />
      <span>{text}</span>
    </div>
  );
};

export default CheckboxComponent;