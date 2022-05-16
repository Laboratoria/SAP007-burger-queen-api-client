import styles from "./style.module.css"

function Container(props){
    return
        <div className={`${styles.container}`}>{props.children}</div>
    
}
export default Container