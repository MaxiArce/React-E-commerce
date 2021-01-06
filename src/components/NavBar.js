import React from 'react';
import { ReactComponent as BrandLogo } from '../images/Logo.svg';
import CartWidget from './CartWidget'

const NavBar = () => {
    return (

        < nav className="bg-gray-800" >
            <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
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
                            <BrandLogo className="block lg:block h-8 w-auto" />
                            {/*Logo Mobile */}
                            <BrandLogo className="hidden lg:hidden h-8 w-auto" />
                        </div>

                        {/* NavBar items desktop */}
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="#" className="navbar__item--active">Home</a>
                                <a href="#/categorias" className="navbar__item">Catergorias</a>
                            </div>
                        </div>
                    </div>


                    {/* Cart + Profile */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Cart Widget */}
                        <CartWidget/>                        
                        {/* Profile dropdown */}
                        <div className="ml-3 relative">
                            <div>
                                <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className="block sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#" className="navbar-mobile__item--active">Home</a>
                    <a href="#/categorias" className="navbar-mobile__item">Categorias</a>
                </div>
            </div>
        </nav >
    )
}

export default NavBar