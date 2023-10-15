import { CartBox } from '../CartBox/CartBox';
import {Nav} from "../Nav"
import {Container, DisplayButton} from "../Common"
import "./Header.css"
import cartIcon from "../../images/icon-cart.svg"
import avatar from "../../images/image-avatar.png"
import {useState} from "react"
import { useCartContext } from '../Context';



export function Header() {
    const [cartBox, setCartBox] = useState(false)
    const {itemDetails} = useCartContext()
    
    function ItemBubble() {
        return(
                <p style={{visibility: itemDetails._quantity > 0 ? "visible" : "hidden"}}
                className="item-bubble">
                    {itemDetails._quantity}
                </p>
        )
    }
    function handleCartClick() {
        setCartBox(!cartBox)
    }


    return (
        <header>
            <Container>
                <Nav />
                <div className="profile-section">
                    <DisplayButton source={cartIcon} description={"cart"} onClick={handleCartClick} />
                    <ItemBubble />
                    {cartBox && <CartBox />}
                    <DisplayButton source={avatar} description={"profile"} />
                </div>
            </Container>
        </header>
    )
}