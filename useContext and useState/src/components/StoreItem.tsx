import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../formatCurrency"

type StoreItemsPropTypes = {
  id : number
  name : string
  imgUrl : string
  price : number
}

function StoreItem({id,name,imgUrl,price} : StoreItemsPropTypes) {
  const {increaseCartQuantity,decreaseCartQuantity,removeFromCart} = useShoppingCart()
  // const quantity = getItemQuantity(id)
  return (
    <>
    <div className="image-wrapper">
      <img src={imgUrl} alt="" />
    </div>
    <h3>{formatCurrency(price)}</h3>
    <h3>{name}</h3>
    <button onClick={()=>increaseCartQuantity(id)} >Add</button>
    <button onClick={()=>decreaseCartQuantity(id)} >Remove</button>
    <button onClick={()=>removeFromCart(id)} >Remove All</button>
    </>
  )
}

export default StoreItem