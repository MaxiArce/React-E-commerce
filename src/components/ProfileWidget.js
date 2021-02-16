import React, { useState, useContext } from "react"
import { Transition } from '@headlessui/react'
import UserIcon from '../images/User.svg'
import { Link } from "react-router-dom"
import { AuthenticationContext } from '../context/AuthenticationContext'



const ProfileWidget = () => {

    const {isUserLogged, SignOut} = useContext(AuthenticationContext)

    //estado para mostrar u ocultar dropdown
    const [profileIsOpen, setProfileIsOpen] = useState(false)

    return (
        <div className="ml-3 relative">
            <div>
                <button className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" onClick={() => setProfileIsOpen(!profileIsOpen)} id="user-menu" aria-haspopup="true">
                    <img className="h-6 w-6 rounded-full" src={UserIcon} alt="" />
                </button>
            </div>
            <Transition
                show={profileIsOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                {(ref) => (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                        {!isUserLogged && <Link to={`/useraccount`}  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Ingresar</Link>}
                        {isUserLogged && <Link to={`/useraccount`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Tu cuenta</Link>}
                        {isUserLogged && <button onClick={()=>{SignOut();setProfileIsOpen(!profileIsOpen)}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Cerrar Sesión</button>}
                    </div>
                )}
            </Transition>
        </div>
    )
}

export default ProfileWidget