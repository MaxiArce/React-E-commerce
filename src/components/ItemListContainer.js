import React from 'react';

const ItemListContainer = ({greeting}) => {
    return(
        <div className="h-screen">
            {/* Recibe greeting por prop */}
            <h1 className="font-bold text-4xl text-center">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer