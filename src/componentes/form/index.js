import './style.css';

const LayoutForm= (props)=> {
    return(
        <div className="layoutForm">
        <section className="container">
        <form>
           {
            props.children
           }
        </form>
        </section>
        </div>
    
    )
}

export default LayoutForm;