import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from '../data.json'
import { formatCurrency } from "../formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
  }

function CartItem({id,quantity} : CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(i=>i.id === id)
    if(item == null) return null
  return (
    <div>
        <img src={item.imgUrl} alt=""
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div>
        {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div>
            { formatCurrency(item.price)}
        </div>
        <div>{ formatCurrency(item.price * quantity)}</div>
        <button onClick={()=>removeFromCart(item.id)} >
        &times;
        </button>
    </div>
  )
}

export default CartItem