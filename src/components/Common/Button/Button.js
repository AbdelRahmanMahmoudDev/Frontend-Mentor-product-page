import "./Button.css"

export function Button({color, children, onClick}) {
    return (
        <button className="btn-normal" style={{backgroundColor: color}} onClick={onClick}>{children}</button>
    )
}