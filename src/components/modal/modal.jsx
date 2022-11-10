import { useEffect } from 'react';

import './modal.css';

import { Close } from '../../assets/svg';
import ModalPortal from './modal-portal';

export const Modal = ({ children, isOpen, handleClose, wrapperId }) => {
  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ModalPortal wrapperId={wrapperId}>
      <div className="modal" onClick={handleClose}>
        <div className="modal__container" onClick={e => e.stopPropagation()}>
          <button
            className="modal__close-button"
            type="button"
            onClick={handleClose}
          >
            <Close />
          </button>

          <div className="modal__content">
            {children}
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};
