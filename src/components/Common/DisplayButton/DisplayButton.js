import "./DisplayButton.css"

export function DisplayButton(props) {
    return (
        <button style={{...props.style}} className="btn-display" onClick={props.onClick}>
            <img className={props.className} src={props.source} alt={props.description}/>
        </button>
    )
}