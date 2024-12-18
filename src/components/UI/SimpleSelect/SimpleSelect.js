import React, { useState, useCallback } from 'react';
import './SimpleSelect.css';

const SimpleSelect = ({ 
  title, 
  options, 
  defaultValue, 
  placeholder,
  onChange
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue || '');

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setSelectedOption(value);
    onChange(value);
  }, [onChange]);

  // Создаем массив с уникальными значениями
  const uniqueOptions = [...new Set(options.map(option => option.value))].sort();

  return (
    <div className="simpleselect-ui-component">
      <div className="simpleselect-ui-component-title">{title}</div>
      <select
        value={selectedOption}
        onChange={handleChange}
        placeholder={placeholder}
      >
        <option value="">{placeholder}</option>
        {uniqueOptions.map((optionValue) => (
          options.find(option => option.value === optionValue) && (
            <option key={optionValue} value={optionValue}>
              {options.find(option => option.value === optionValue).label}
            </option>
          )
        ))}
      </select>
    </div>
  );
};

export default SimpleSelect;