import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList'

const ItemListContainer = () => {

    // Array temporal de productos 
    const productsArray= [
        {
            id: 1,
            title: "Item 1",
            description: "Descripción 1",
            price: 200,
            pictureUrl: "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-80cbd.appspot.com/o/1.png?alt=media&token=041807fc-b000-46e1-b4d7-9a5009975325",
        }, {
            id: 2,
            title: "Item 2",
            description: "Descripción 2",
            price: 300,
            pictureUrl: "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-80cbd.appspot.com/o/2.png?alt=media&token=dcdbf1c3-2183-4edd-a55c-589a290c9634",
        }, {
            id: 3,
            title: "Item 3",
            description: "Descripción 3",
            price: 300,
            pictureUrl: "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-80cbd.appspot.com/o/2.png?alt=media&token=dcdbf1c3-2183-4edd-a55c-589a290c9634",
        }
        , {
            id: 4,
            title: "Item 4",
            description: "Descripción 4",
            price: 300,
            pictureUrl: "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-80cbd.appspot.com/o/2.png?alt=media&token=dcdbf1c3-2183-4edd-a55c-589a290c9634",
        }
    ];

    return(
        <div>
            {/* Envia el array por props */}
            <ItemList items={productsArray}/>
        </div>
    )
}

export default ItemListContainer