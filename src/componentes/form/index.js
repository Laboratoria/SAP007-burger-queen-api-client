const LayoutForm= (props)=> {
    return(
        <section className="container">
        <form>
           {
            props.children
           }
        </form>
        </section>
    )
}

export default LayoutForm;