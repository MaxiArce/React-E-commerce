import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import ItemDescription from "./ItemDescription";
import { CartContext } from "../context/CartContext";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { ReactComponent as FavIcon } from "../images/FavIcon.svg";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const { isUserLogged, addFavItem } = useContext(AuthenticationContext);

  //stores the quantity of the selected product
  const [counter, setCounter] = useState(1);

  //status to show/hide the "ItemCount"
  const [itemCountStatus, setItemCountStatus] = useState(true);

  //if the counter is greater than 0, it is possible to extract 1
  const substractAmount = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  // if the counter is less than the stock allow to add 1
  const addAmount = () => {
    if (counter < item.stock) {
      setCounter(counter + 1);
    }
  };

  //resets counter
  const resetAmount = () => {
    setCounter(1);
  };

  //activated when you click on add to cart (from itemCount) if the selected quantity is greater than 0
  const onAdd = (item, counter) => {
    if (counter > 0) {
      //stores products added to the cart using the context function
      addItem(item, counter);

      //change the status to false to no longer display the add to cart button
      setItemCountStatus(false);
    }
  };

  return (
    <div className="bg-white rounded-xl grid sm:grid-cols-6 sm:grid-rows-1 grid-rows-2	grid-cols-1 gap-0 h-full content-center overflow-hidden sm:shadow-lg">
      <div
        className="flex  h-full col-span-3 image-background"
        style={{ backgroundImage: `url(${item.pictureUrl})` }}
      >
        {isUserLogged && (
          <button
            onClick={() => {
              addFavItem(item.id);
            }}
            className=" relative w-8 h-8 mt-auto mb-5 mx-5"
          >
            <FavIcon className="w-8 h-8"></FavIcon>
          </button>
        )}
      </div>

      <div className="flex flex-col items-start col-span-3 space-y-5  h-full sm:p-4 p-4">
        <h3 className="font-bold text-4xl font-title">{item.title}</h3>
        <p className="font-semibold text-3xl">${item.price}</p>
        <p className="text-sm">Available: {item.stock}</p>
        <ItemCount
          item={item}
          initial={0}
          substract={substractAmount}
          add={addAmount}
          reset={resetAmount}
          onAdd={onAdd}
          counter={counter}
          itemCountStatus={itemCountStatus}
        />
        <ItemDescription item={item}></ItemDescription>
      </div>
    </div>
  );
};

export default ItemDetail;
