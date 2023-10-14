import "./Overlay.css"

export function Overlay({children, bgColor}) {
    return (
        <div style={{backgroundColor: bgColor}} className="overlay">{children}</div>
    )
}