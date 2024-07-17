// Items.jsx
import React from "react";

let Items = [
  "Fruits",
  "Computers",
  "IPhones",
  "Fish",
  "Dogs",
  "Apples",
  "Bananas",
  "Food",
];

function List() {
  return (
    <ul className="list-group">
      {Items.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
