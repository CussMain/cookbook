import React, { useState }    from "react";
import LeftPanel              from "../../containers/LeftPanel/LeftPanel";
import Space                  from "../../containers/Space/Space";
import './Main.css';

const Main = () => {

  const [state, setState] = useState({
    selectedOption: null,
    difficultyOption: null,
    clearFlag: null,
    selectedRandom: null
  });

  const handleChange = (value) => {
    setState(prevState => ({
      ...prevState,
      selectedOption: value
    }));
  };

  const handleRadioButtonChange = (value) => {
    setState(prevState => ({
      ...prevState,
      difficultyOption: value
    }));
  };

  const handleClick = (value) => {
    setState(prevState => ({
      ...prevState,
      clearFlag: value
    }));
  };

  const handleClickRandom = (value) => {
    setState(prevState => ({
      ...prevState,
      selectedRandom: value
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
      />
    </main>
  );
};

export default Main;
