import React from "react";

class PageTitle extends React.Component {
    render() {
      return(
        <div className="page-title">
            <h> 
              {this.props.title}
            </h>
        </div>
      )
    }
  };

export default PageTitle;