import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProduct(categoryId).then((response) => {
      setItems(response);
    });
  }, [categoryId]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
