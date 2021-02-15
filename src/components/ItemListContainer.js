import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ItemList from './ItemList'
import Landing from './Landing'


const ItemListContainer = ({items}) => {
    
    //setState para cambiar el estado de los procutos 
    const [products, setProducts] = useState([]);

    const { id } = useParams();

    //useEffect con una promesa con contador de 2seg, devuelve items dependiendo si se recibe o no una categoria por useParams

    useEffect(() => {

        if (id) {
            //Como paso los items desde app.js uso filter y no .where de firestore
            const filterItems = items.filter(element => element.category === id)
            setProducts(filterItems);
        } else {
            setProducts(items);
        }

    }, [id, items]);


    return (
        <div className="">
            <Landing></Landing>
            {/* Envia el array por props */}
            <ItemList items={products} />
        </div>
    )
}

export default ItemListContainer