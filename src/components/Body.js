import React    from "react";
import Header   from "./body/Header";
import Main     from "./body/Main";

class Body extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          urlAPI:       'https://dummyjson.com/recipes',
          urlAPItags:   'https://dummyjson.com/recipes/tag'   
        };
    }

    render() {
      return(
        <div className="body">
            <Header 
                title="Сборник рецептов из разных стран мира"
                urlAPI={this.state.urlAPI}
                urlAPItags={this.state.urlAPItags}
            />
            <Main 
                urlAPI={this.state.urlAPI}
                urlAPItags={this.state.urlAPItags}
            />
        </div>
      )
    }
};

export default Body;