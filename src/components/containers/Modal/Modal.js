import React, { useContext, useEffect, useState  } from 'react';
import ModalContent                                from '../../objects/ModalContent/ModalContent';
import { Context }                                 from '../../Context';
import './Modal.css';

const Content = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-overlay-contener">
        <div className="modal-overlay-contener-heder">
          <button  className="modal-overlay-contener-button"  onClick={onClose}>&times;</button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

const Modal = () => {
  const { name , setName } = useContext(Context);
  const [ isModalOpen, setIsModalOpen] = useState(false);
  const [ cardNumber , setCardNumber ] = useState(0);


  // Открываем окно, при изменении контекста
  useEffect(() => {
    if (name ?? 0) {
      setCardNumber(name);
      setIsModalOpen(true);
      setName(0);
    }
  }, [name]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div>
      <Content isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalContent
          cardNumber={cardNumber}
        />
      </Content>
    </div>
  );
};

export default Modal;
