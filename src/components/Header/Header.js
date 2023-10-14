import { CartBox } from '../CartBox/CartBox';
import {Nav} from "../Nav"
import {Container, DisplayButton} from "../Common"
import "./Header.css"
import cartIcon from "../../images/icon-cart.svg"
import avatar from "../../images/image-avatar.png"
import {useState} from "react"



export function Header() {
    const [cartBox, setCartBox] = useState(false)
    
    function handleCartClick() {
        setCartBox(!cartBox)
    }

    return (
        <header>
            <Container>
                <Nav />
                <div className="profile-section">
                    <DisplayButton source={cartIcon} description={"cart"} onClick={handleCartClick} />
                    {cartBox && <CartBox />}
                    <DisplayButton source={avatar} description={"profile"} />
                </div>
            </Container>
        </header>
    )
}