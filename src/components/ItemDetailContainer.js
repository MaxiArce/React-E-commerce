import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import {firestore} from '../firebaseConfig';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [ item , setItem ] = useState([]);
    const [itemExist , setItemExist ] = useState ();

    //Paso el id del producto de manera manual (proxima entrega usando routing)
    const {id} = useParams();

    useEffect(() => {
        //llamo a firebase para pedir la colección "items" y filtro con el id
        const db = firestore
        const collection = db.collection('items') 
        const tempItem = collection.doc(id)
        tempItem.get()
        .then((element) => { 
            if(element.exists) {
                setItem ({ id: element.id, ...element.data()})
                setItemExist(true)
            }
            else{
                setItemExist(false)
            }
        })
     },[id]);


    //Si item existe devuelve un component itemDetail
    return(
        <div className="sm:mx-10 sm:py-24 sm:h-screen sm:max-w-8xl ">
            {itemExist === undefined &&
                (<div className="flex flex-col sm:col-span-4 col-span-2  w-full">
                    <p className="text-center w-full">Cargando Producto...</p>
                </div>)
            }
            {itemExist ?
                (<ItemDetail item={item}/>)
                :(<div className="flex flex-col sm:col-span-4 col-span-2  w-full">
                    <p className="text-center w-full">Producto no encontrado</p>
                </div>)
            }
        </div>
    )
}

export default ItemDetailContainer