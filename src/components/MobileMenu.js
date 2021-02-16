import React, { useState } from "react"
import { Transition } from '@headlessui/react'
import { Link } from "react-router-dom";




const MobileMenu = () => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

    return (
        <div>

            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <button onClick={() => setDropdownIsOpen(!dropdownIsOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none " aria-expanded="false">
                    {/* Icon when menu is closed. */}
                    <svg className={`h-6 w-6 ${!dropdownIsOpen? "block" : "hidden"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {/* Icon when menu is open. */}
                    <svg  className={`h-6 w-6 ${dropdownIsOpen? "block" : "hidden"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>


            <Transition
                show={dropdownIsOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                {(ref) => (
                    <div className="absolute block sm:hidden w-full">
                        <div className="flex flex-col bg-white px-2 mt-6">
                            <Link to={`/`} onClick={() => setDropdownIsOpen(!dropdownIsOpen)} className="block px-3 py-2 text-xl font-medium text-gray-600">Home</Link>
                            <hr></hr>
                            <p className="block px-3 py-2 text-xl font-medium text-gray-600">Categorias</p>
                            <Link to={`/categories/cactus`} onClick={() => setDropdownIsOpen(!dropdownIsOpen)} className="navbar-mobile__item">Cactus</Link>
                            <Link to={`/categories/suculentas`} onClick={() => setDropdownIsOpen(!dropdownIsOpen)} className="navbar-mobile__item">Suculentas</Link>
                            <Link to={`/categories/bonsais`} onClick={() => setDropdownIsOpen(!dropdownIsOpen)} className="navbar-mobile__item">Bonsáis</Link>
                            <Link to={`/categories/carnivoras`} onClick={() => setDropdownIsOpen(!dropdownIsOpen)} className="navbar-mobile__item">Carnívoras</Link>
                            <Link to={`/categories/crasas`} onClick={() => setDropdownIsOpen(!dropdownIsOpen)} className="navbar-mobile__item">Crasas</Link>
                            <hr></hr>
                            <Link to={`/categories/contact`} onClick={() => setDropdownIsOpen(!dropdownIsOpen)} className="block px-3 py-2 text-xl font-medium text-gray-600">Contacto</Link>
                        </div>
                    </div>
                )}
            </Transition>

        </div>
    )
}

export default MobileMenu