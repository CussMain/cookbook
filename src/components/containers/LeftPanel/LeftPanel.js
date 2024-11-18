import React, { useState } from "react";
import Filters from "../../objects/Filters/Filters";
import './LeftPanel.css';

const LeftPanel = ({ 
  onChange, 
  onRadioButtonChange, 
  onClick, 
  onClickRandom,
  filterNum = 50 
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (value) => {
    setSelectedOption(value);
    onChange(value);
  };

  const handleRadioButtonChange = (value) => {
    onRadioButtonChange(value);
  };

  const handleClickClear = () => {
    onClick();
  };

  const handleClickRandom = () => {
    onClickRandom();
  };

  return (
    <div className="left-panel">
      <Filters 
        onChange={handleChange}    
        onSelectedRadioButton={handleRadioButtonChange}
        onClickRandom={handleClickRandom}    
        onClickClear={handleClickClear}  
        filterNum={filterNum}
      />
    </div>
  );
};

export default LeftPanel;