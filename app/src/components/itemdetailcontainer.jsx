import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services";
import ItemDetail from "./ItemDetail"; 
import CartContext from "../context/Cartcontext";

const ItemDetailContainer = () => { 
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const { addItem } = useContext(CartContext); 

  useEffect(() => {
    getProduct(id)
      .then((response) => {
        setItem(response);
      })
      .catch(() => {
        setItem(null);
      });
  }, [id]);

  return <ItemDetail item={item} addItem={addItem} />;
};

export default ItemDetailContainer;
