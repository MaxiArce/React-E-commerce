import React from 'react';
import { useParams } from "react-router-dom";
import LandingBackground  from '../images/LandingBg.jpg';


const Landing = () => {

    const {id} = useParams();


    return(
        <div className="pt-16 pb-4">
            {/* Muestra la imagen de landing o el titulo de la categoria */}
            {id 
            ?(
                <h3 className="text-gray-900 capitalize text-5xl font-light font-title sm:m-8">{id}</h3>
            )
            :(
                <div>
                    <div className="w-full h-screen flex items-center justify-center sm:justify-start landing-animation" style={{ backgroundImage: `url(${LandingBackground})` }}>
                        <div className="sm:w-1/2">
                            <h2 className="text-gray-900 capitalize text-5xl font-light font-title sm:ml-48">Blossoming</h2>
                            <p className="text-gray-900 font-semibold sm:ml-48">Tienda de Plantas</p>
                        </div>
                    </div>
                    <h3 className="text-gray-900 capitalize text-5xl font-light font-title sm:m-8"> Catalogo</h3>
                </div>
            )}
        </div>
    )
}

export default Landing