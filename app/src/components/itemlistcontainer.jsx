import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { getProduct } from "../services";
import itemlist from "./itemlist";

const itemlistcontainer = () => {
    const [item, setItems] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        getProduct(categoryId).then((response) => { seltItems(response)
        });
    }, [categoryId]);
    return <itemlist items= {items} />; 
    };
export default itemlistcontainer;