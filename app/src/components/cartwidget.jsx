import { useContext } from "react";
import cartcontext from "../context/cartcontext";
import { getcartquantity } from "./utils";

const cartwidget = () => {
    const {cart} = useContext(cartcontext)

    const quantity = getcartquantity(cart)

    return <div> cartwidget {!!quantity && quantity}</div>
    };
    export default cartwidget;