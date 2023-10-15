import {createContext, useState, useContext} from "react"

const CartContext = createContext(undefined)

export const CartProvider = ({children}) => {
    const [itemCount, setItemCount] = useState(0)
    const [itemDetails, setItemDetails] = useState({
        _title: "",
        _price: 0,
        _quantity: 0,
    })
    const [addClick, setAddClick] = useState(false)

    return <CartContext.Provider
        value={{itemCount,
                changeItemCount: number => setItemCount(prev => Math.max(prev + number, 0)),
                itemDetails,
                changeItemDetails: (title, price, quantity) => setItemDetails(prev => ({
                    _title: title,
                    _price: price,
                    _quantity: quantity + prev._quantity
                })),
                addClick,
                changeAddClick: (setBool) => setAddClick(setBool)
                }}>
        {children}
        </CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext)