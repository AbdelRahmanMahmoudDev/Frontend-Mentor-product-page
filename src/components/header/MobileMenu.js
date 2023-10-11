import "../../css/mobile-menu.css"
import "../../css/common.css"
import CloseIcon from "../../images/icon-close.svg"
import {useMobileMenuContext} from "./MobileMenuContext"

export default function MobileMenu() {
    const {toggleMenu} = useMobileMenuContext()
        return (
        <aside className="mobile-menu">
            <div className="container">
                <button style={{marginBottom: "30px"}} onClick={() => toggleMenu()}>
                    <img src={CloseIcon} alt="Close Menu"/>
                </button>
                <ul>
                        <li key="Collections">Collections</li>
                        <li key="Men">Men</li>
                        <li key="Women">Women</li>
                        <li key="About">About</li>
                        <li key="Contact">Contact</li>
                </ul>
            </div>
        </aside>
    )
}