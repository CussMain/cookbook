import React from "react";
import Filters from "../../objects/Filters/Filters";
import './LeftPanel.css';

const LeftPanel = ({ 
    onChange, 
    onRadioButtonChange, 
    onClick, 
    onClickRandom,
    filterNum = 50 
}) => {

  const handleChange = (value) => {
    onChange(value);
  };

  const handleRadioButtonChange = (value) => {
    onRadioButtonChange(value);
  };

  const handleClickClear = (value) => {
    onClick(value);
  };

  const handleClickRandom = (value) => {
    onClickRandom(value);
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