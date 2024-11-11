import React        from "react";
import LeftPanel    from "./Main/LeftPanel";
import Space        from "./Main/Space";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urlAPI:       props.urlAPI,
      urlAPItags:   props.urlAPItags,
      switchCase:   0
    };

    console.log('Main urlAPI:'      , this.state.urlAPI);
    console.log('Main urlAPItags:'  , this.state.urlAPItags);
  }

  handleChange = (value) => {
    console.log('Main handleChange:', value);
    this.setState({ selectedOption: value });
    this.setState({ switchCase: 1 });
    // this.props.onChange(value); //-->onChange
  };

  handleRadioButtonChange = (value) => {
    console.log('Main handleRadioButtonChange:', value);
    this.setState({ difficultyOption: value });
    this.setState({ switchCase: 2 });
    // this.props.onRadioButtonChange(value); //-->onRadioButtonChange
  };

  handleClick = (value) => {
    console.log('Main handleClick:', value);
    this.setState({ clearFlag: value });
    this.setState({ switchCase: 3 });
    // this.props.onClick(value); //-->onClick
  };

  handleClickRandom = (value) => {
    console.log('Main handleClickRandom:', value);
    this.setState({ selectedRandom: value });
    this.setState({ switchCase: 4 });
    // this.props.onClickRandom(value); //-->ClickRandom
  };

  render() {
    const { urlAPI, urlAPItags, selectedOption, difficultyOption, clearFlag, selectedRandom, switchCase} = this.state;
    console.log('Main switch:' , switchCase, ' data:', selectedOption, difficultyOption, clearFlag, selectedRandom);

    return(
      <main className="main">
            <LeftPanel
                urlAPI={urlAPI}
                urlAPItags={urlAPItags} 
                onChange={this.handleChange}    
                onClick={this.handleClick} 
                onRadioButtonChange={this.handleRadioButtonChange}
                onClickRandom={this.handleClickRandom} 
            />
            <Space
                urlAPI={urlAPI}
                urlAPItags={urlAPItags}    
                selectedOption={selectedOption}
                difficultyOption={difficultyOption}
                clearFlag={clearFlag}
                selectedRandom={selectedRandom}
                switchCase={switchCase}
            />
    </main>
    
    )
  }
};

export default Main;