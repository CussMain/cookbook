import React from "react";
import './PageTitle.css';

function PageTitle({ title }) {
  return (
    <div className="pagetitle-ui-component">
      <h1>{title}</h1>
    </div>
  );
}

export default PageTitle;