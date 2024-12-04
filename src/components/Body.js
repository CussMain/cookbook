import React, { useState }  from "react";
import Header               from "./tree/Header/Header";
import Main                 from "./tree/Main/Main";
import Modal                from "./containers/Modal/Modal";
import { Context }          from "./Context";
import './Body.css';

const Body = () => {

  const [name , setName] = useState();

  return (
    <div className="body">
      <Context.Provider value={ {name , setName} }>
        <Header 
          title="Сборник рецептов из разных стран мира"
        />
        <Main 
        />
        <Modal/>
      </Context.Provider>
    </div>
  );
};

export default Body;