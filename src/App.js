import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'

const App = () => {
    return (
            //Envuelvo toda la app (nodo) para que se puedan consumir los datos del context 
            <CartProvider>
                <BrowserRouter>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/">
                            <ItemListContainer/>
                        </Route>
                        <Route exact path="/categories/:id">
                            <ItemListContainer/>
                        </Route>
                        <Route exact path="/item/:id">
                            <ItemDetailContainer />
                        </Route>                        
                        <Route exact path="/cart">
                            <Cart />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </CartProvider>
        )
}

export default App