import React, { useState, useEffect } from "react"
import Item from './Item';
import { ReactComponent as LoadingSpinner } from '../images/Spinner.svg';

const ItemList = ({items}) => {

    //setState para cambiar el estado de los procutos 
    const [products, setProducts] = useState([]);

    //useEffect con una promesa con contador de 2seg, devuelve "items recibido por prop" cuando detecta el cambio en products se vuelve a renderizar
    useEffect(() => {
        const productsPromise = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(items)
                reject("No se recibieron productos")
            },2000)
        })
        .then((result) => {
            setProducts(result)
        })
        .catch((reject) =>{
            console.log(reject)
        });

    },[products]);

    
    return(
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-0 w-full">
            {/* Verifica que el array no este vacio , usa map para recorrer el array hacer un return por cada element */}
            {products.length >0 
            ? products.map(element=>{
                return (
                    <Item key={element.id} item={element}/>
                );
            })
            :(
                <div className="flex flex-col sm:col-span-4 col-span-2 items-center w-full">
                    <LoadingSpinner/>
                    <p>Cargando Productos</p>
                </div>
            )}
        </div>
    )
}

export default ItemList