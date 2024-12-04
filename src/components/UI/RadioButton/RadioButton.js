import React, { useState , useEffect } from 'react';
import './RadioButton.css';

const RadioButton = ({ title, options, defaultValue, onChange , resetButton}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleChange = (value) => {
    setSelectedOption(value);
    onChange(value);
  };

  useEffect(() => {
    if (resetButton) {
      setSelectedOption(defaultValue);
      onChange(defaultValue);
    };
  }, [resetButton]);

  return (
    <div className="radiobutton-ui-component">
      <label  className="radiobutton-ui-component-title" htmlFor={title}>{title}</label>
      {options.map((option) => (
        <div key={option.value} className="radiobutton-ui-component-button" >
          <input
            type="radio"
            id={option.value}
            name="group"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => handleChange(option.value)}
          />
          <label className="radiobutton-ui-component-lable" htmlFor={option.value}>{option.label}</label>    
        </div>
      ))}
    </div>
  );
};

export default RadioButton;