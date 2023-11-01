import React, { useContext } from "react";
import CartContext from "../context/Cartcontext";
import { getCartQuantity } from "./utils";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const quantity = getCartQuantity(cart);

  return (
    <div>
      {quantity ? `Cart Widget ${quantity}` : null}
    </div>
  );
};

export default CartWidget;
