import "./Button.css"

export function Button({color, children}) {
    return (
        <button style={{backgroundColor: color}}>{children}</button>
    )
}