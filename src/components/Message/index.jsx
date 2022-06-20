import styles from "./style.module.css";

function Message({ msg }) {
  return <><div className={styles.message}>{msg}</div></>;
}
export default Message;
