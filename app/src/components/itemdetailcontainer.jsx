import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import { getProduct } from "../services";
import itemdetail from "./itemdetail";

const itemdetailcontainer = () => {
    const [item,setItem] = useState(null);
    const {id} = useParams();
    
    useEffect (() => {
        getProduct(id).then((response) =>{
            setItem(response)
        })
        .catch(() => {
            setItem(null);
        });
    }, [id]);    
    return <itemdetail item={item} />;
};

    export default itemdetailcontainer;