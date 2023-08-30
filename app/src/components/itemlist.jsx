import React from "react";
import {link} from "react-router-dom"; 

const itemlist = ({ items }) => {
    return <div>
    <h1>itemlist</h1>
    <ul>
        {items.map((item) => (
            <li key={item.id}>
                <link to={`/item/${item.id}`}>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>{item.category}</p>
                </link>
            </li>
            ))}
        </ul>
    </div>
};

itemlist.propTypes = {
    items: propTypes.array.isRequired,
};

export default itemlist;