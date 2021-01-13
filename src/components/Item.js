import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {

    return(
        <div className="p-4 m-2">
            <div className="bg-green-500 rounded-xl">
                <img src={item.pictureUrl} className="m-auto"></img>
                <button className="bg-white p-2 m-2  rounded font-bold">
                    <Link to={"/item/" + item.id}>Ver Mas</Link>
                </button>  
            </div>     
            <p className="text-xl font-semibold">{item.title}</p>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <p>Precio ${item.price}</p> 
        </div>
    )
}

export default Item