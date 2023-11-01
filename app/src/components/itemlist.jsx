import React from "react";
import { Link } from "react-router-dom"; 
import PropTypes from "prop-types"; 

const ItemList = ({ items }) { 
  return (
    <div>
      <h1>ItemList</h1> 
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}> 
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <p>{item.categoryId}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired, 
};

export default ItemList;
