import React, { useState } from "react"
import { Transition } from '@headlessui/react'
import { Link } from "react-router-dom";




const Dropdown = () => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

    return (
        <div className="relative inline-block text-left">
            <div>
                <button type="button" onClick={() => setDropdownIsOpen(!dropdownIsOpen)} className="inline-flex justify-center w-full rounded-md border px-4 py-2 navbar__item" id="options-menu" aria-haspopup="true" aria-expanded="true">
                Categories
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
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
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <Link to={`/categories/cactus`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>Cactus</Link>
                            <Link to={`/categories/suculentas`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>Succulents</Link>
                            <Link to={`/categories/bonsais`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>Bonsais</Link>
                            <Link to={`/categories/carnivoras`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>Carnivorous</Link>
                            <Link to={`/categories/crasas`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>Crassas</Link>
                            <Link to={`/categories/interior`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>Interior</Link>
                        </div>
                    </div>
                )}
            </Transition>
        </div>
    )
}

export default Dropdown