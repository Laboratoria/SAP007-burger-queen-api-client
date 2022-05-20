import styles from './MessageError.module.css'

export const MessageError = ({ message }) => {
  return (
    <>
      <div className={styles.MessaErrorBody}>
        <span className={styles.MessageError}>{message}</span>
      </div>
    </>
  );
};