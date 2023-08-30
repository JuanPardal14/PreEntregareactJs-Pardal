import React from "react";
import { ReactPropTypes } from "prop-types";

const itemdetail =({ item}) => {
    if (!item) {
        return null;
    }

    return <div>
        <h1>ItemDetail</h1>
        <p>{item.name}</p>
        <p>${item.price}</p>
        <p>{item.category}</p>
    </div>
    };

    itemdetail.propTypes= {
        item: PropTypes.objetct,
    };

    export default itemdetail;