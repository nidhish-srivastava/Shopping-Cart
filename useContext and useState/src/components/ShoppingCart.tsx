import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../formatCurrency";
import CartItem from "./CartItem";
import storeItems from '../data.json'

type PropType = {
  isOpen: boolean;
};

function ShoppingCart({ isOpen }: PropType) {
  const { cartItems, closeCart } = useShoppingCart();
  return (
    <>
    <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
            ))}
    </div>
    <div>
      Total{" "}
      {formatCurrency(
        cartItems.reduce((total,cartItem)=>{
          const item = storeItems.find(i=>i.id === cartItem.id)
          return total + (item?.price || 0) * cartItem.quantity
        },0)
      )}
    </div>
    </>
  );
}

export default ShoppingCart;
