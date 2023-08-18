import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function App() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
    <div className="m-2">
      <div>
          {items.map((item) => (
            <div key={item.id} size="md">
              <div>
                <img src={item.img} position="top" alt="..." />
                <div>
                  <h2>{item.title}</h2>
                  <h2>{item.price}</h2>
                  <button onClick={() => dispatch(addToCart(item))}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
