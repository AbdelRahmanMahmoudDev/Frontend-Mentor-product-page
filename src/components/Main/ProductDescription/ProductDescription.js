import {Container} from "./../../Common"
import IconPlus from "./../../../images/icon-plus.svg"
import IconMinus from "./../../../images/icon-minus.svg"
import IconCart from "./../../../images/icon-cart.svg"
import {useState, useEffect} from "react"
import {DisplayButton, Button} from "./../../Common"
import {useCartContext} from "./../../Context"
import "./ProductDescription.css"
const product = {
    company: `Sneaker Company`,
    title: `Fall Limited Edition Sneakers`,
    description: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.`,
    price: 250.00,
    discount: 0.5,
}

export function ProductDescription() {
    const [quantity, setQuantity] = useState(0)
    const {changeItemCount, itemDetails, changeItemDetails, addClick, changeAddClick} = useCartContext()



    function handleCheckoutButton() {
        if(quantity > 0) {
            changeItemCount(parseInt(1))
            changeItemDetails(product.title, product.discount > 0 ? product.discount * product.price : product.price, quantity)
            changeAddClick(true)
        }
    }

    useEffect(() => {
        console.log(addClick)
    }, [addClick])

    return (
        <section className="sec-prod-desc">
            <Container>
                <p className="prod-company">{product.company}</p>
                <h1 className="prod-title">{product.title}</h1>
                <p className="prod-desc">{product.description}</p>
                <div className="price-section">
                    <div className="row">
                        <span>${(product.price * product.discount).toFixed(2)}</span>
                        <span>{product.discount * 100}%</span>
                    </div>
                    <p><s>${(product.price).toFixed(2)}</s></p>
                </div>
                <div className="row item-section">
                    <div className="quantity-select">
                        <DisplayButton source={IconMinus} description="Remove one" onClick={() => setQuantity(prev => Math.max(prev - 1, 0))}/>
                        <span>{quantity.toString()}</span>
                        <DisplayButton source={IconPlus} description="Add one" onClick={() => setQuantity(prev => prev + 1)}/>
                    </div>
                    <Button className="btn-checkout" onClick={handleCheckoutButton}>
                        <img src={IconCart} alt="Cart"/>
                        <p>Add to cart</p>
                    </Button>
                </div>
            </Container>
        </section>
    )
}