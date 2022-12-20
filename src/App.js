import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { firestore } from "./firebaseConfig";
import CartProvider from "./context/CartContext";
import AuthProvider from "./context/AuthenticationContext";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartCheckout from "./components/CartCheckout";
import UserAccount from "./components/UserAccount";

const App = () => {
  //State to store items brought from firebase
  const [itemsArray, setItemsArray] = useState([]);

  useEffect(() => {
    //get "items" from firebase
    const db = firestore;
    const collection = db.collection("items");
    const query = collection.get();
    query
      .then((result) => {
        setItemsArray(
          result.docs.map((element) => ({ id: element.id, ...element.data() }))
        );
      })
      .catch((e) => {
        console.log("Error: " + e);
      });
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer items={itemsArray} />
            </Route>
            <Route exact path="/categories/:id">
              <ItemListContainer items={itemsArray} />
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/checkout">
              <CartCheckout />
            </Route>
            <Route exact path="/useraccount">
              <UserAccount></UserAccount>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
