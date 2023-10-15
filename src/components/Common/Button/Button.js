import "./Button.css"

export function Button({className, children, onClick}) {
    return (
        <button className={`btn-normal ${className}`} onClick={onClick}>{children}</button>
    )
}