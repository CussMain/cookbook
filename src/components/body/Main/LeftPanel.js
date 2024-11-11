import React    from "react";
import Filter   from "./LeftPanel/Filter";

class LeftPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      urlAPI:       props.urlAPI,
      urlAPItags:   props.urlAPItags
    };

    console.log('LeftPanel urlAPI:'      , this.state.urlAPI);
    console.log('LeftPanel urlAPItags:'  , this.state.urlAPItags);

  }

  handleChange = (value) => {
    console.log('LeftPanel handleChange:', value);
    this.setState({ selectedOption: value });
    this.props.onChange(value); //-->onChange
  };

  handleRadioButtonChange = (value) => {
    console.log('LeftPanel handleRadioButtonChange:', value);
    this.props.onRadioButtonChange(value); //-->onRadioButtonChange
  };

  handleClick = (value) => {
    console.log('LeftPanel handleClick:', value);
    this.props.onClick(value); //-->onClick
  };

  handleClickRandom = (value) => {
    console.log('LeftPanel handleClickRandom:', value);
    this.props.onClickRandom(value); //-->ClickRandom
  };

  render() {
    return(
      <div className="left-panel">
        <main>
          <Filter 
            urlAPI={this.state.urlAPI}
            urlAPItags={this.state.urlAPItags}  
            onChange={this.handleChange}    
            onClick={this.handleClick} 
            onRadioButtonChange={this.handleRadioButtonChange}
            onClickRandom={this.handleClickRandom}     
          />
        </main>
      </div>
    )
  }
  
};

export default LeftPanel;