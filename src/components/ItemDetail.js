import React from 'react';
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {

    return(
        <div className="bg-green-200 rounded-xl grid sm:grid-cols-2 grid-cols-1 gap-0 m-10 content-center">
            <div className="flex flex-col text-center m-2">
                <img className="place-self-center w-1/2" src={item.pictureUrl}></img>
                <p className="font-bold text-2xl">{item.title}</p>
                <p>{item.description}</p>
                <p>${item.price}</p>
            </div>
            <div className="flex justify-center items-center">
                <ItemCount stock={item.stock} initial={0}/>
            </div>
        </div>
    )
}

export default ItemDetail