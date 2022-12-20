import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 gap-y-6 sm:w-11/12 mx-auto">
      {/* Verify that the array is not empty,  maps the array and make a return for each element */}
      {items.length > 0 ? (
        items.map((element) => {
          return <Item key={element.id} item={element} />;
        })
      ) : (
        <div className="flex flex-col sm:col-span-4 col-span-2 items-center w-full">
          <p className="text-center w-full">
            There are no products available in this category
          </p>
        </div>
      )}
    </div>
  );
};

export default ItemList;
