import "./DisplayButton.css"

export function DisplayButton({source, description, clickEvent}) {
    return (
        <button onClick={clickEvent}>
            <img src={source} alt={description}/>
        </button>
    )
}