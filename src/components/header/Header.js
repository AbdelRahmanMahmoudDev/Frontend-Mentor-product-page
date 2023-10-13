import { CartBox } from '../CartBox/CartBox';
import {Nav} from "../Nav"
import {Container} from "../Common"
import "./Header.css"
import cartIcon from "../../images/icon-cart.svg"
import avatar from "../../images/image-avatar.png"
import {useState} from "react"

export function Header() {
    const [cartBox, setCartBox] = useState(false)
    return (
        <header>
            <Container>
                <Nav />
                <div className="profile-section">
                    <button onClick={() => setCartBox(!cartBox)}>
                        <img src={cartIcon} alt="cart"/>
                    </button>
                    {cartBox && <CartBox />}
                    <button>
                        <img src={avatar} alt="profile"/>
                    </button>
                </div>
            </Container>
        </header>
    )
}