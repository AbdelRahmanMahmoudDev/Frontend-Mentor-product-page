import "./DisplayButton.css"

export function DisplayButton(props) {
    return (
        <button  className="btn-display" onClick={props.onClick}>
            <img className={props.className} src={props.source} alt={props.description}/>
        </button>
    )
}