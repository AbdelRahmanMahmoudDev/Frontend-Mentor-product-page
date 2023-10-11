import Logo from "../../images/logo.svg"
import BurgerIcon from "../../images/icon-menu.svg"
import "../../css/nav.css"
import Overlay from "./../Overlay"
import MobileMenu from "./MobileMenu"
import {useMobileMenuContext, MobileMenuProvider} from "./MobileMenuContext"

function Nav() {

    const {menu, toggleMenu} = useMobileMenuContext()
    return (
        <div className="nav-section">
            <div className="burger-icon">
                {menu && <Overlay />}
                {menu && <MobileMenu />}
                <button onClick={() => toggleMenu()}>
                    <img src={BurgerIcon} alt="Menu"/>
                </button>

            </div>
            <img className="logo" src={Logo} alt="sneakers"/>
            <nav>
                <li key="Collections">Collections</li>
                <li key="Men">Men</li>
                <li key="Women">Women</li>
                <li key="About">About</li>
                <li key="Contact">Contact</li>
            </nav>
        </div>

    )
}

export default function Root() {
    return (
        <MobileMenuProvider>
            <Nav />
        </MobileMenuProvider>
    )
}