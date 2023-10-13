import deleteIcon from "../../images/icon-delete.svg"
import icon from "./../../images/image-product-1-thumbnail.jpg"

export function CartBox() {

  const cartitems = [
    {
      name: "Fall Limited Edition Sneakers",
      price: 125.0,
      quantity: 3,
    },
  ]

  return (
            <div className="cart-box">
              <h3>Cart</h3>
              <hr />
              {cartitems.map((item) => (
                <li key={item.name}>
                  <img src={icon} alt={item.name}/>
                  <h4>{item.name}</h4>
                  <p>${item.price} x {item.quantity}</p>
                  <p>${item.price * item.quantity}</p>
                  <img src={deleteIcon} alt="remove" />
                </li>
              ))}
              <button>Checkout</button>
            </div>
  )
}