import React, { useState }    from "react";
import LeftPanel              from "../../containers/LeftPanel/LeftPanel";
import Space                  from "../../containers/Space/Space";
import './Main.css';

const Main = ({ 
      onChange, 
      onClick, 
      onRadioButtonChange,
      onClickRandom 
  }) => {

  const [state, setState] = useState({
    selectedOption: null,
    difficultyOption: null,
    clearFlag: null,
    selectedRandom: null,
    switchCase: 0
  });

  const handleChange = (value) => {
    setState(prevState => ({
      ...prevState,
      selectedOption: value,
      switchCase: 1
    }));
  };

  const handleRadioButtonChange = (value) => {
    setState(prevState => ({
      ...prevState,
      difficultyOption: value,
      switchCase: 2
    }));
  };

  const handleClick = (value) => {
    setState(prevState => ({
      ...prevState,
      clearFlag: value,
      switchCase: 3
    }));
  };

  const handleClickRandom = (value) => {
    setState(prevState => ({
      ...prevState,
      selectedRandom: value,
      switchCase: 4
    }));
  };

  return (
    <main className="main">
      <LeftPanel
        onChange={handleChange}    
        onClick={handleClick} 
        onRadioButtonChange={handleRadioButtonChange}
        onClickRandom={handleClickRandom} 
      />
      <Space 
        selectedOption={state.selectedOption}
        difficultyOption={state.difficultyOption}
        clearFlag={state.clearFlag}
        selectedRandom={state.selectedRandom}
        switchCase={state.switchCase}
      />
    </main>
  );
};

export default Main;
