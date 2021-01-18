import React, {useState, useEffect} from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {

    //almacena la cantidad del producto seleccionado
    const [counter, setCounter] = useState(0)

    //estado para mostrar/ocultar el ItemCount
    const [itemCountStatus, setItemCountStatus] = useState(true)

    //almacena los productos agregados al carrito
    const [cart, setCart] = useState([])

    //si el contador el mayor a 0 permite extraer 1
    const substractAmount = () => {
        if (counter > 0){
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
        setCounter(0)
    }
    
    //se activa cuando se hace click en agregar al carrito (desde itemCount) si la cantidad seleccionada es mayor a 0
    const onAdd = async({id, title, category, description, price, pictureUrl,stock}) => {
        if ( counter > 0){
            console.log("Cantidad Seleccionada: " + counter)
            console.log(({id,title,category,description,price,pictureUrl,stock}))
            
            setCart(...cart,{ id, title, category, description, price, pictureUrl, stock })
            
            //cambia el estado a false para no mostrar mas el boton agregar a carrito
            setItemCountStatus(false)
        }
        else{
            console.log("Selecciona al menos un producto")
        }

    }      


    return(
        <div className="bg-green-200 rounded-xl grid sm:grid-cols-2 grid-cols-1 gap-0 m-10 content-center">
            <div className="flex flex-col text-center m-2">
                <img className="place-self-center w-1/2" src={item.pictureUrl}></img>
                <p className="font-bold text-2xl">{item.title}</p>
                <p>{item.category}</p>
                <p>{item.description}</p>
                <p>${item.price}</p>
            </div>
            <div className="flex justify-center items-center">
                <ItemCount item={item} initial={0} substract={substractAmount} add={addAmount} reset={resetAmount} onAdd={onAdd}
                counter = {counter} itemCountStatus={itemCountStatus} />
            </div>
        </div>
    )
}

export default ItemDetail