import React, { useContext }    from 'react';
import PageTitle                from "../../objects/PageTitle/PageTitle";
import ThemeSwitcher            from "../../UI/ThemeSwitcher/ThemeSwitcher";
import { Context }              from '../../Context';
import './Header.css';

const Header = ({ title })  => {
  const { userTheme, setUserTheme } = useContext(Context);

  const handleChange = (value) => {
    if (value) {
      setUserTheme('dark');
    } else {
      setUserTheme('light');
    };
  };

  return (
    <div className="header">
      <div className='header-theme-title' > 
        <PageTitle 
          title={title} 
        />
      </div>
      <div className="header-theme-switcher">
        <ThemeSwitcher 
          text="темная тема" 
          checked={userTheme === 'dark'}
          onChange={handleChange}
        />       
      </div>
    </div>
  );
}

export default Header;