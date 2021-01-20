import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ItemList from './ItemList'

// Array temporal de productos 
const productsArray = [
    {
        id: 1,
        title: "Item 1",
        category: "cactus",
        description: "Descripción 1",
        price: 200,
        pictureUrl: "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-80cbd.appspot.com/o/1.png?alt=media&token=041807fc-b000-46e1-b4d7-9a5009975325",
        stock: 10
    }, {
        id: 2,
        title: "Item 2",
        category: "suculentas",
        description: "Descripción 2",
        price: 300,
        pictureUrl: "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-80cbd.appspot.com/o/2.png?alt=media&token=dcdbf1c3-2183-4edd-a55c-589a290c9634",
        stock: 50
    }, {
        id: 3,
        title: "Item 3",
        category: "bonsais",
        description: "Descripción 3",
        price: 300,
        pictureUrl: "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-80cbd.appspot.com/o/3.png?alt=media&token=512f89a7-082b-424f-ae56-af473e4b0d52",
        stock: 33
    }
    , {
        id: 4,
        title: "Item 4",
        category: "carnivoras",
        description: "Descripción 4",
        price: 300,
        pictureUrl: "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-80cbd.appspot.com/o/pitcher2%5B1%5D.png?alt=media&token=55417f3f-1b9f-4038-bd59-49de19042b05",
        stock: 6
    }
];

const ItemListContainer = () => {

    //setState para cambiar el estado de los procutos 
    const [products, setProducts] = useState([]);

    const { id } = useParams();

    //useEffect con una promesa con contador de 2seg, devuelve items dependiendo si se recibe o no una categoria por useParams

    useEffect(() => {

        if (id) {
            const filterItems = productsArray.filter(element => element.category === id)
            setProducts(filterItems)
        } else {
            setProducts(productsArray)
        }

    }, [id, productsArray]);


    return (
        <div>
            {/* Envia el array por props */}
            <ItemList items={products} />
        </div>
    )
}

export default ItemListContainer