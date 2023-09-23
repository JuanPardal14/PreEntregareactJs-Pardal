import { useState,useEffect, useContext } from "react";
import {useParams} from "react-router-dom";
import { getProduct } from "../services";
import itemdetail from "./itemdetail";
import cartcontext from "../context/cartcontext";

const itemdetailcontainer = () => {
    const [item,setItem] = useState(null);
    const {id} = useParams();

    const {addItem} = useContext(cartcontext);
    
    useEffect (() => {
        getProduct(id).then((response) =>{
            setItem(response)
        })
        .catch(() => {
            setItem(null);
        });
    }, [id]);    
    return <itemdetail item={item} addItem={addItem} />;
};

    export default itemdetailcontainer;