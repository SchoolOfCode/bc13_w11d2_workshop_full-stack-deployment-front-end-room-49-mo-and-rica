//This is the component which shows each individual list item.

import React from "react";
import "./listItem.css";

function ListItem({ name, completed, tickItem, handleDelete, key }) {
  return (
    <>
      <li
        data-testid="list-item"
        className={completed ? "tickedItem" : "untickedItem"}
        onClick={tickItem}
      >
        {name}
      </li>
      <button onClick={() => handleDelete(key)}> Delete Item!</button>
    </>
  );
}

export default ListItem;
