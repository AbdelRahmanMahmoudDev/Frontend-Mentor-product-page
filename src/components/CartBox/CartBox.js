import deleteIcon from "../../images/icon-delete.svg"
import icon from "./../../images/image-product-1-thumbnail.jpg"
import {Button} from "../Common"
import "./CartBox.css"
import { useCartContext } from "../Context"
import { DisplayButton } from "../Common"

export function CartBox() {

  const {itemDetails, changeItemDetails, addClick, changeAddClick} = useCartContext()

  const cartitems = [
    {
      name: itemDetails._title,
      price: itemDetails._price,
      quantity: itemDetails._quantity,
    },
  ]

  function handleDeleteClick() {
    changeAddClick(false)
    changeItemDetails(itemDetails._title, itemDetails._price, -itemDetails._quantity)
  }

  function ProductItem() {
    return (
      cartitems.map((item) => (
        <li key={item.name}>
          <div className="card">
            <div className="col">
              <img src={icon} alt={item.name}/>
            </div>
            <div className="col">
              <h4>{item.name}</h4>
              <div className="text">
                <div className="row">
                  <div className="price">
                    <p>${item.price.toFixed(2)} x {item.quantity}</p>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <DisplayButton className="trash-can" source={deleteIcon} description="remove" onClick={handleDeleteClick}/>
            </div>
          </div>
        </li>
      ))
    )
  }

  return (
            <div className="cart-box">
              <h3>Cart</h3>
              {addClick && <ProductItem />}
              {!addClick && (
                <p>Your cart is empty.</p>
              )}
              {addClick && <Button children="Checkout"/>}
              
            </div>
  )
}