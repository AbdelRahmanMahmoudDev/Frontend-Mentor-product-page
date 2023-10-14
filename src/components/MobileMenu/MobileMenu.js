import "./MobileMenu.css"
import CloseIcon from "../../images/icon-close.svg"
import {useMobileMenuContext} from "../Context/MobileMenuContext"
import {DisplayButton} from "../Common"

export function MobileMenu() {
    const {toggleMenu} = useMobileMenuContext()
        return (
        <aside className="mobile-menu">
                <DisplayButton source={CloseIcon} description="Close Menu" clickEvent={toggleMenu}/>
                <ul>
                        <li key="Collections">Collections</li>
                        <li key="Men">Men</li>
                        <li key="Women">Women</li>
                        <li key="About">About</li>
                        <li key="Contact">Contact</li>
                </ul>
        </aside>
    )
}