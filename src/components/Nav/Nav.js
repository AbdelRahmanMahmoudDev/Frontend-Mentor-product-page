import Logo from "../../images/logo.svg"
import BurgerIcon from "../../images/icon-menu.svg"
import "./Nav.css"
import {Overlay} from "../Common"
import {MobileMenu} from "../MobileMenu"
// import {useMobileMenuContext, MobileMenuProvider} from "../Context/MobileMenuContext"
import {useMobileMenuContext} from "../Context/MobileMenuContext"

export function Nav() {

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