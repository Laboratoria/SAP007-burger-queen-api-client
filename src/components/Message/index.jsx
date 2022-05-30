import styles from "./style.module.css"
import {useState, useEffect} from "react"

  function Message({msg,type}){
    const [visible, setVisible] = useState(false)

    useEffect(() => {
      if (!msg) {
        setVisible(false)
        return
      };
      setVisible(true)
      const timer = setTimeout(() => {
        setVisible(false)
      }, 5000)
      return () => clearTimeout(timer)
    }, [msg])
    
  return(
    <>{visible && (
      <div className={`${styles.msg}${styles[type]}`}>{msg}</div>
      )}
    </>
  )
}
export default Message;