import React, { useState, useEffect } from "react"
import Item from './Item';
import { ReactComponent as LoadingSpinner } from '../images/Spinner.svg';

const ItemList = ({items}) => {
    
    return(
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-0 w-full">
            {/* Verifica que el array no este vacio , usa map para recorrer el array hacer un return por cada element */}
            {items.length >0 
            ? items.map(element=>{
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