import React, { useContext, useState } from 'react';
import { AuthenticationContext } from '../context/AuthenticationContext'
import Register from '../components/Register'
import Login from '../components/Login'
import FavItems from '../components/FavItems'

const UserAccount = () => {

    const { isUserLogged, currentUser } = useContext(AuthenticationContext)

    //estado para mostrar u ocultar el formulario de registro
    const [newUser, setNewUser] = useState(true);


    return (
        <div className="mt-24 mx-auto sm:w-1/2">
            {isUserLogged ?
                <div className=" font-bold rounded  p-4 bg-gray-200">
                    <h4 className="text-2xl text-black">Tu cuenta</h4>
                    <p className="font-bold">Nombre: <span className="font-normal">{currentUser.name}</span></p>
                    <p className="font-bold">Email: <span className="font-normal">{currentUser.email}</span></p>
                    <p className="font-bold">Telefono: <span className="font-normal">{currentUser.phone}</span></p>
                    <FavItems></FavItems>
                </div>
                : (
                    <div>
                        <div className="">
                            <button onClick={() => { setNewUser(true) }} className={`${newUser ? "bg-black text-white opacity-100" : "bg-gray-200 text-gray-900 opacity-50"} font-bold  w-1/2  mx-auto  rounded p-2`}>Registrarse</button>
                            <button onClick={() => { setNewUser(false) }} className={`${newUser ? "bg-gray-200 text-gray-900 opacity-50" : "bg-black text-white opacity-100"}font-bold  w-1/2 mx-auto  rounded p-2`}>Ingresar</button>
                        </div>
                        {newUser ?
                            (<div>
                                <Register></Register>
                            </div>)
                            : (<Login></Login>)

                        }
                    </div>
                )
            }
        </div>

    )
}

export default UserAccount