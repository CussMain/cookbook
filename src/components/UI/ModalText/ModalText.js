import React from "react";
import './ModalText.css';

const ModalText = ({ title , text }) => {

    return (
      <div className="modal-text-ui-component">
            <label  type='title' htmlFor={title}>{title}</label>
            <pre type='text'>{text}</pre>
      </div>
    );
  };
  
  export default ModalText;