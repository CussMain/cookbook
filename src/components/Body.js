import React    from "react";
import Header   from "./tree/Header/Header";
import Main     from "./tree/Main/Main";
import './Body.css';

const Body = () => {

  return (
    <div className="body">
      <Header 
        title="Сборник рецептов из разных стран мира"
      />
      <Main 
      />
    </div>
  );
};

export default Body;