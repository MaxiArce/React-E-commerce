import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {firestore} from './firebaseConfig';
import CartProvider from './context/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import CartCheckout from './components/CartCheckout'

const App = () => {

    //State para guardar los items traidos desde firebase
    const [ itemsArray , setItemsArray ] = useState([])


    useEffect(() => {
        
        //llamo a firebase para pedir la colección "items"
        const db = firestore
        const collection = db.collection('items')
        const query = collection.get()
        query
        .then((result)=> {
            //por cada element de results crea un nuevo item y lo pasa al set
            setItemsArray(result.docs.map(element => ({id: element.id, ...element.data()})))
        })
        .catch((e) => {
            console.log("Error: " + e)
        })
    },[])

    return (
            //Envuelvo toda la app (nodo) para que se puedan consumir los datos del context 
            <CartProvider>
                <BrowserRouter>
                    <NavBar/>
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
                            <CartCheckout/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </CartProvider>
        )
}

export default App