import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = () => {

    return(
        <div className="flex flex-row">
            {/* Dos ItemCount de ejemplo uno con el stock y el otro sin */}
            <ItemCount stock={10} initial={1}/>
            <ItemCount stock={0} initial={0}/>
        </div>
    )
}

export default ItemListContainer