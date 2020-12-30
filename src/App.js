import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
    return (
        <header>
            <NavBar/>
            <ItemListContainer greeting="Texto temporal"/>
        </header>
        )
}

export default App