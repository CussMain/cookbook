import React from "react";
import Library from "../../objects/Library/Library";
import './Space.css';

const Space = ({ 
    selectedOption, 
    difficultyOption, 
    clearFlag, 
    selectedRandom
  }) => {

  return (
    <div className="space">
      <Library 
        selectedOption={selectedOption}
        difficultyOption={difficultyOption}
        clearFlag={clearFlag}
        selectedRandom={selectedRandom}
      />
    </div>
  );
};

export default Space;