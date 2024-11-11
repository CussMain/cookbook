import React from 'react';

const RadioButton = ({ title, options, defaultValue, onChange }) => {
  const [selectedOption, setSelectedOption] = React.useState(defaultValue);

  const handleChange = (value) => {
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <div className="radio-button-group">
      <dev className="radio-button-title">{title}</dev>
        {options.map((option) => (
          <div key={option.value} className={`radio-button ${selectedOption === option.value ? 'active' : ''}`}>
            <label className="radio-button-label" type="radio-label" htmlFor={option.value}>{option.label}</label>
            <input
              type="radio"
              id={option.value}
              name="group"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => handleChange(option.value)}
            />  
            <dev></dev>
          </div>
        ))}
    </div>
  );
};

export default RadioButton;