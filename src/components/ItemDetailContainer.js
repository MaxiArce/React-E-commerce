import React, { useState, useEffect } from "react"
import ItemDetail from './ItemDetail';


// Array temporal de productos 
const productsArray= [
    {
        id: 1,
        title: "Item 1",
        description: "Descripción 1",
        price: 200,
        pictureUrl: "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-80cbd.appspot.com/o/1.png?alt=media&token=041807fc-b000-46e1-b4d7-9a5009975325",
        stock: 10
    }, {
        id: 2,
        title: "Item 2",
        description: "Descripción 2",
        price: 300,
        pictureUrl: "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-80cbd.appspot.com/o/2.png?alt=media&token=dcdbf1c3-2183-4edd-a55c-589a290c9634",
        stock: 50   
    }, {
        id: 3,
        title: "Item 3",
        description: "Descripción 3",
        price: 300,
        pictureUrl: "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-80cbd.appspot.com/o/2.png?alt=media&token=dcdbf1c3-2183-4edd-a55c-589a290c9634",
        stock: 33
    }
    , {
        id: 4,
        title: "Item 4",
        description: "Descripción 4",
        price: 300,
        pictureUrl: "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-80cbd.appspot.com/o/2.png?alt=media&token=dcdbf1c3-2183-4edd-a55c-589a290c9634",
        stock: 6
    }
];


const ItemDetailContainer = () => {

    const [ item, setItem ] = useState();

    //Paso el id del producto de manera manual (proxima entrega usando routing)
    const itemID = 1;

    useEffect(() => {
        //promise que devuelve el item despues de 2 segundos
        const getItems = new Promise((resolve, reject)=>{
        setTimeout(() => {
            const item = productsArray.find(element => element.id == itemID)
            resolve(item)
            reject("Producto no encontrado")
        },2000);
        })
        .then((result) => {
            setItem(result)
        })
        .catch((reject) =>{
            console.log(reject)
        });

    },[itemID]);

    //Si item no esta vacio devuelve un component itemDetail
    return(
        <div>
            {item? <ItemDetail item={item}/>: <p>Cargando</p>}
        </div>
    )
}

export default ItemDetailContainer