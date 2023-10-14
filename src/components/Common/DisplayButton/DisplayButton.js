import "./DisplayButton.css"

export function DisplayButton({source, description, onClick}) {
    return (
        <button className="btn-display" onClick={onClick}>
            <img src={source} alt={description}/>
        </button>
    )
}