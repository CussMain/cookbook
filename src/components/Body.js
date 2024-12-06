import React, { useState , useEffect }    from "react";
import Header                             from "./tree/Header/Header";
import Main                               from "./tree/Main/Main";
import Modal                              from "./tree/Modal/Modal";
import { Context }                        from "./Context";
import { appConfig }                      from './config';
import './Body.css';

const Body = () => {

  const [name       , setName]       = useState();
  const [userTheme  , setUserTheme]  = useState();

  useEffect(() => {

    let userThemeLocal = window.localStorage.getItem(appConfig.localStorageID);

    if (userTheme?.length ?? 0) {
      window.localStorage.setItem(appConfig.localStorageID, userTheme);
    } else {
      if (userThemeLocal?.length ?? 0) {
        setUserTheme(userThemeLocal);
      } else {
        setUserTheme('light');
        window.localStorage.setItem(appConfig.localStorageID, userTheme);
      };
    };

  }, [userTheme, setUserTheme]);

  return (
     <div className={`body-${userTheme}`}>
      <Context.Provider value={ {name , setName , userTheme , setUserTheme } }>
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