import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../features/cartSlice";

export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <>
        <div>Navbar</div>
        <span>
          <Link to="/">All Product </Link>
        </span>
          <Link to="/cart">Cart({totalQuantity})</Link>
    </>
  );
}
