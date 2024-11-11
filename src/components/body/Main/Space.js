import React    from "react";
import Library  from "./Space/Library";

class Space extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      urlAPI:           props.urlAPI,
      urlAPItags:       props.urlAPItags
    };

    console.log('Space urlAPI:'      , this.state.urlAPI);
    console.log('Space urlAPItags:'  , this.state.urlAPItags);
    
  }

  render() {

    const {selectedOption, difficultyOption, clearFlag, selectedRandom, switchCase} = this.props;
    const {urlAPI, urlAPItags} = this.state;
    
    console.log('Space switch:' , switchCase, ' data:', selectedOption, difficultyOption, clearFlag, selectedRandom);

    return(
      <div className="space">
        <Library 
            urlAPI={urlAPI}
            urlAPItags={urlAPItags}    
            selectedOption={selectedOption}
            difficultyOption={difficultyOption}
            clearFlag={clearFlag}
            selectedRandom={selectedRandom}
            switchCase={switchCase}
        />
      </div>
    )
  }
};

export default Space;