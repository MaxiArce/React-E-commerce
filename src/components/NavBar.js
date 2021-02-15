import React, { useContext, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import CartWidget from './CartWidget'
import { ReactComponent as BrandLogo } from '../images/Logo.svg';
import { CartContext } from '../context/CartContext'
import DropdownWidget from './DropdownWidget';
import ProfileWidget from './ProfileWidget';


const NavBar = () => {

    //uso el CartContext para traer el carrito 
    const { cart } = useContext(CartContext)

    return (

        < nav className="bg-white fixed top-0 w-full pin-t" >
            
            <div className="max-w-8xl mx-2 sm:px-6 lg:px-8 ">

                <div className="relative flex items-center justify-between h-16">

                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed. */}
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Icon when menu is open. */}
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

                        <div className="flex-shrink-0 flex items-center">
                            {/*Logo Desktop */}
                            <Link to={`/`}>
                                <BrandLogo className="block lg:block h-8 w-auto" />
                            </Link>

                            {/*Logo Mobile */}
                            <Link to={`/`}>
                                <BrandLogo className="hidden lg:hidden h-8 w-auto" />
                            </Link>
                        </div>

                        {/* NavBar items desktop */}
                        <div className="hidden sm:block sm:ml-6 w-full">
                            <div className="flex justify-end space-x-4">
                                <NavLink exact to={`/`} className="mr-auto text-2xl font-title pt-1">Blossoming</NavLink>
                                <DropdownWidget></DropdownWidget>
                                <NavLink to={`/contact`} className="navbar__item" >Contacto</NavLink>
                            </div>
                        </div>
                    </div>

                    {/* Cart + Profile */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Cart Widget - Solo se dibuja si el carrito > 0 */}
                        {cart.length > 0 && <Link to="/cart"><CartWidget /></Link>}
                        <ProfileWidget></ProfileWidget>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {/* <div className="block sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link to={`/`} className="navbar__item--active">Home</Link>
                    <Link to={`/categories/cactus`} className="navbar__item">Cactus</Link>
                    <Link to={`/categories/suculentas`} className="navbar__item">Suculentas</Link>
                    <Link to={`/categories/bonsais`} className="navbar__item">Bonsáis</Link>
                    <Link to={`/categories/carnivoras`} className="navbar__item">Carnívoras</Link>
                </div>
            </div> */}
        </nav >
    )
}

export default NavBar

