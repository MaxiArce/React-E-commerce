import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
    return (
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer/>
                    </Route>
                    <Route exact path="/categories/:categoryId">
                        <ItemListContainer/>
                    </Route>
                    <Route exact path="/item/:id">
                        <ItemDetailContainer />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
}

export default App