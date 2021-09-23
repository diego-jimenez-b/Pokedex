import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={`${classes.modal} ${props.className}`}>
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById('overlays')
      )}
      {createPortal(
        <ModalOverlay className={props.className}>
          {props.children}
        </ModalOverlay>,
        document.getElementById('overlays')
      )}
    </Fragment>
  );
};

export default Modal;
