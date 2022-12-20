import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Landing from "./Landing";

const ItemListContainer = ({ items }) => {
  //setState to change the state of the products
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  //returns items depending on whether or not a category is received for useParams
  useEffect(() => {
    if (id) {
      const filterItems = items.filter((element) => element.category === id);
      setProducts(filterItems);
    } else {
      setProducts(items);
    }
  }, [id, items]);

  return (
    <div className="">
      <Landing></Landing>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
