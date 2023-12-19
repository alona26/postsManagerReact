
import classes from './modal.module.css';

function Modal({ children}) {

  return (
    <>
    
      <div className={classes.backdrop} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;