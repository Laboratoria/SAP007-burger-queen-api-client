export function Button(props) {
    return (
        <button onClick={props.clickFunction}>{props.option}</button>
    )
}