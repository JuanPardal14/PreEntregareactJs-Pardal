import { usecontext, usestate } from "react";
import CartContext from "../context/cartcontext";
import { serverTimestamp } from "firebase/firestore";
import { getcarttotal, mapcarttoorderitems } from "./utils";
import { createOrder } from "../services";

const checkout = () => {
  const [orderId, setOrderId] = usestate(null);
  const [isLoading, setIsLoading] = usestate(false);
  const { cart, clear } = usecontext(CartContext);

  const total = getcarttotal(cart);

  const handlecheckout = () => {
    const order = {
      buyer: {
        name: "Juan",
        phone: "424324",
        email: "juanito@gmail.com",
      },
      items: mapcarttoorderitems(cart),
      total,
      date: serverTimestamp(),
    };

    setIsLoading(true);
    createOrder(order).then((docRef) => {
      setOrderId(docRef.id);
      setIsLoading(false);
      clear();
    });
  };

  return (
    <div>
      <h1>checkout</h1>

      <h2>Resumen de la compra</h2>

      {orderId && <p>El id de la orden es: {orderId}</p>}

      {!orderId && (
        <>
          <div>
            <h4>Productos</h4>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <p>{item.title}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio por unidad: ${item.price}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                </li>
              ))}
            </ul>
          </div>

          <p>Total de la compra: {total}</p>

          <button onClick={handlecheckout}>Finalizar compra</button>

          {isLoading && <p>Procesando compra...</p>}
        </>
      )}
    </div>
  );
};

export default checkout;