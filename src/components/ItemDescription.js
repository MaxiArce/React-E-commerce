import React from 'react';
import { ReactComponent as WaterIcon } from '../images/Water.svg';
import { ReactComponent as LightIcon } from '../images/Light.svg';



const ItemDescription = ({item}) => {

    const light = []
    const water = []

    for (let i = 0; i < item.water; ++i) {
        water.push(<WaterIcon className="w-8 h-8"></WaterIcon>)
    }

    for (let j = 0; j < item.light; ++j) {
        light.push(<LightIcon className="w-8 h-8"></LightIcon>)
    }    

    return(
        <div className="">
            <div className="grid grid-cols-3">
                <div>
                    <h4 className=" font-semibold my-4">Agua</h4>
                    <div className="flex flex-row space-x-2">
                        {water}
                    </div>
                </div>
                <div>
                    <h4 className=" font-semibold my-4">Luz</h4>
                    <div className="flex flex-row space-x-2">
                        {light}
                    </div>
                </div>
                <div>
                    <h4 className=" font-semibold my-4">Cuidado</h4>
                    <p className="inline-block font-bold bg-black rounded text-center text-white p-1">{item.care}</p>
                </div>
            </div>
            <h4 className=" font-semibold mt-6 mb-2">Descripción</h4>
            <p>{item.description}</p>

        </div>
    )
}

export default ItemDescription