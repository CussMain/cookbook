import React, {useState} from 'react';
import PageTitle from "../../objects/PageTitle/PageTitle";
import './Header.css';

const Header = ({ urlAPI, urlAPItags, title })  => {
  const [apiUrl, setApiUrl] = useState(urlAPI);
  const [apiUrlTags, setApiUrlTags] = useState(urlAPItags);

  return (
    <div className="header">
      <PageTitle 
        title={title} 
        apiUrl={apiUrl}
        apiUrlTags={apiUrlTags}
      />
    </div>
  );
}

export default Header;