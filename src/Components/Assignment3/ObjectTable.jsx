import React from "react";
import "./ObjectTable.css";

const obj = {
  id: "10002",
  name: "Eco-Friendly Water Bottle",
  description: "Stay hydrated with our durable, eco-friendly water bottle.",
  price: 14.99,
  currency: "USD",
  imageURL: "https://example.com/images/product-10002.jpg",
};

const objWithPosition = Object.entries(obj).map((entry, index) => ({
  key: entry[0],
  value: entry[1],
  position: index,
}));

const ObjectTable = () => {
  const list = objWithPosition.reduce((acc, { key, value, position }) => {
    acc.push(
      <tr key={key}>
        <td>{key}</td>
        <td>{value}</td>
        <td>{position}</td>
      </tr>
    );
    return acc;
  }, []);

  return (
    <div className="wrapper">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
};

export default ObjectTable;
