import React from "react"
import Item from './Item';

const ItemList = ({items}) => {
    
    return(
        <div className="grid sm:grid-cols-5 grid-cols-2 gap-4 gap-y-6 sm:w-11/12 mx-auto">
            {/* Verifica que el array no este vacio , usa map para recorrer el array hacer un return por cada element */}
            {items.length >0 
            ? items.map(element=>{
                return (
                    <Item key={element.id} item={element}/>
                );
            })
            :(
                <div className="flex flex-col sm:col-span-5 col-span-2 items-center w-full">
                    <p className="text-center w-full">No hay productos disponibles en esta categoría</p>
                </div>
            )}
        </div>
    )
}

export default ItemList