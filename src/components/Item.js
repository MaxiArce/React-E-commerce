import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {

    return(
        <button className= "pb-4 rounded-xl shadow-xl">
            <Link to={"/item/" + item.id}>
                <img src={item.pictureUrl} className="m-auto"></img>
                <div className="flex flex-row  p-2">
                    <h3 className="sm:text-lg">{item.title}</h3> 
                    <p className="text-lg text-center align-middle font-bold ml-auto">${item.price}</p> 
                </div>
            </Link>
        </button>
    )
}

export default Item