import deleteIcon from "../../images/icon-delete.svg"
import icon from "./../../images/image-product-1-thumbnail.jpg"
import {Button} from "../Common"
import "./CartBox.css"
export function CartBox() {

  const cartitems = [
    {
      name: "Fall Limited Edition Sneakers",
      price: 125.00,
      quantity: 3,
    },
  ]

  return (
            <div className="cart-box">
              <h3>Cart</h3>
              {cartitems.map((item) => (
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
                      <img src={deleteIcon} alt="remove" />
                    </div>
                  </div>
                </li>
              ))}
              <Button color="hsl(26, 100%, 55%)" children="Checkout"/>
            </div>
  )
}