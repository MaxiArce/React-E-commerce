import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import CartWidget from './CartWidget'
import { ReactComponent as BrandLogo } from '../images/Logo.svg';
import { CartContext } from '../context/CartContext'
import DropdownWidget from './CategoriesDropdown';
import ProfileWidget from './ProfileWidget';
import MobileMenu from './MobileMenu';


const NavBar = () => {

    //uso el CartContext para traer el carrito 
    const { cart } = useContext(CartContext)

    return (

        < nav className="bg-white fixed top-0 w-full pin-t" >
            
            <div className="max-w-8xl mx-2 sm:px-6 lg:px-8 ">

                <div className="relative flex items-center justify-between h-16">

                    <MobileMenu></MobileMenu>

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

        </nav >
    )
}

export default NavBar

