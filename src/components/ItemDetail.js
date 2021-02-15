import React, {useState, useContext} from 'react';
import ItemCount from './ItemCount';
import ItemDescription from './ItemDescription'
import {CartContext} from '../context/CartContext'

const ItemDetail = ({item}) => {

    const {addItem} = useContext(CartContext);

    //almacena la cantidad del producto seleccionado
    const [counter, setCounter] = useState(1)

    //estado para mostrar/ocultar el ItemCount
    const [itemCountStatus, setItemCountStatus] = useState(true)

    //si el contador el mayor a 0 permite extraer 1
    const substractAmount = () => {
        if (counter > 1){
            setCounter(counter - 1)
        }
    }

    //si el contador es menor al stock permite agregar 1
    const addAmount = () => {
        if (counter < item.stock){
            setCounter(counter + 1)
        }
    }

    //resetea el contador 
    const resetAmount = () => {
        setCounter(1)
    }
    
    //se activa cuando se hace click en agregar al carrito (desde itemCount) si la cantidad seleccionada es mayor a 0
    const onAdd = (item, counter) => {
        if ( counter > 0){

            //almacena los productos agregados al carrito usando la funcion del context
            addItem(item,counter)

            //cambia el estado a false para no mostrar mas el boton agregar a carrito
            setItemCountStatus(false)
        }

    }      


    return(
        <div className="bg-white rounded-xl grid sm:grid-cols-6 sm:grid-rows-1 grid-rows-2	grid-cols-1 gap-0 h-full content-center overflow-hidden sm:shadow-lg">
            
            <div className="flex h-full col-span-3 image-background"  style={{ backgroundImage: `url(${item.pictureUrl})`} }>
            </div>

            <div className="flex flex-col items-start col-span-3 space-y-5  h-full sm:p-4 p-4">
                <h3 className="font-bold text-4xl font-title">{item.title}</h3>
                <p className="font-semibold text-3xl">${item.price}</p>
                <p className="text-sm">Disponibles: {item.stock}</p>
                <ItemCount item={item} initial={0} substract={substractAmount} add={addAmount} reset={resetAmount} onAdd={onAdd}
                counter = {counter} itemCountStatus={itemCountStatus} />
                <ItemDescription item={item}></ItemDescription>
            </div>
        </div>
    )
}

export default ItemDetail