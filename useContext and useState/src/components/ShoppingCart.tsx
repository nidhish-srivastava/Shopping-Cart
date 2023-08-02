import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";

type PropType = {
  isOpen: boolean;
};

function ShoppingCart({ isOpen }: PropType) {
  const { cartItems, closeCart } = useShoppingCart();
  return (
    <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
    </div>
  );
}

export default ShoppingCart;
