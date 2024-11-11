import React      from "react";
import PageTitle  from './header/PageTitle';

class Header extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      urlAPI:       props.urlAPI,
      urlAPItags:   props.urlAPItags,   
    };

    console.log('Header urlAPI:'      , this.state.urlAPI);
    console.log('Header urlAPItags:'  , this.state.urlAPItags);
  }

  render() {
    return(
      <div className="header">
        <PageTitle title={this.props.title}/>
      </div>
    )
  }
};

export default Header;