import "./DisplayButton.css"

export function DisplayButton({source, description, onClick}) {
    return (
        <button onClick={onClick}>
            <img src={source} alt={description}/>
        </button>
    )
}