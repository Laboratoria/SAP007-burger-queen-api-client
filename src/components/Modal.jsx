import styles from './Modal.module.css';

const Modal = ({onClose, children}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.text_modal}>
        <button className={styles.close_modal} onClick={onClose}></button>
        <div className={styles.content_modal}>{children}</div>
      </div>
    </div>
  )    
}

export default Modal;