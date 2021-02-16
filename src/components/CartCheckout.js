import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext'
import { Link } from "react-router-dom";
import { firestore } from '../firebaseConfig';
import firebase from 'firebase/app'
import CartItem from '../components/CartItem'
import { AuthenticationContext } from '../context/AuthenticationContext'


const CartCheckout = () => {

    const { cart, total, clearCart } = useContext(CartContext)
    const { isUserLogged, currentUser } = useContext(AuthenticationContext)


    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [emailVerification, setEmailVerification] = useState("empty")
    const [emailMatch, setEmailMatch] = useState("empty")
    const [purchaseConfirmation, setPurchaseConfirmation] = useState({ status: false, id: "" })

    const sumitOrder = (e) => {

        //previene que la pagina se recargue cuando se usa el onClick
        e.preventDefault();

        // si el usuario no esta logueado verifica los campos
        if (emailVerification === 'correct' && emailMatch === 'correct') {


            //nuevo objeto order
            const order = {
                buyer: { name: name, phone: phone, email: email },
                items: cart,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: total,
            }
            pushOrder(order)

        }

        if (isUserLogged) {
            //nuevo objeto order
            const order = {
                buyer: { name: currentUser.name, phone: currentUser.phone, email: currentUser.email },
                items: cart,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: total,
            }
            pushOrder(order)
        }
        else {
            alert("Verifica los campos")
        }

    }

    //Envia la solicitud a firestore
    const pushOrder = (order) => {
        //referencia
        const db = firestore
        const orders = db.collection('orders')
        //envia el pedido a firebase , si se confirma se cambia el estado de la compra para confirmarla
        orders.add(order)
            .then(({ id }) => {
                setPurchaseConfirmation({ status: true, id: id })
                clearCart()
            })
            .catch((error) => {
                alert("Se produjo un error, intentalo de nuevo mas tarde")
                console.log(error)
            })
    }

    //verifica si el correo ingresado es correcto o no 
    const ValidateEmail = (mail) => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
            setEmailVerification("correct")
            setEmail(mail)
        } else if (mail === '') {
            setEmailVerification("empty")
            setEmail("")
        } else {
            setEmailVerification("incorrect")
            setEmail("")
        }
    }

    //verifica que el correo y la confirmacion coincidan
    const EmailsMatch = (mail) => {
        if (email === mail) {
            setEmailMatch("correct")
        } else if (mail === '') {
            setEmailMatch("empty")
        } else {
            setEmailMatch("incorrect")
        }
    }



    return (
        <div>
            {purchaseConfirmation.status === false
                ? (<div className="flex flex-col sm:flex-row ">
                    {/* Muestra formulario solo si el usuario no esta logueado */}
                    {isUserLogged ?
                        (<div className="mx-4 mt-16 space-y-6 sm:w-1/2">
                            <div className="">
                                <h3 className="mb-4">Estas comprando como:</h3>
                                <div className=" font-bold rounded  p-4  mb-4 bg-gray-200">
                                    <h4 className="text-2xl text-black">Tu cuenta</h4>
                                    <p className="font-bold">Nombre: <span className="font-normal">{currentUser.name}</span></p>
                                    <p className="font-bold">Email: <span className="font-normal">{currentUser.email}</span></p>
                                    <p className="font-bold">Telefono: <span className="font-normal">{currentUser.phone}</span></p>
                                </div>
                                <div className="flex space-x-2 justify-center">
                                    <button onClick={sumitOrder} className="bg-black text-white font-bold rounded p-2" >Terminar Orden</button>
                                    <Link to={`/cart`}>
                                        <button className="font-bold bg-white border-black border-2 rounded p-2">Volver al Carrito</button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                        : (
                            <form className="mx-4 mt-16 space-y-6 sm:w-1/2">
                                <div className="shadow-sm -space-y-px">
                                    <h3 className="mb-4">Tus Datos:</h3>
                                    <div>
                                        <label htmlFor="name" className="sr-only">Nombre Completo</label>
                                        <input type="text" autoComplete="name" onChange={(e) => setName(e.target.value)} required className="appearance-none rounded-t-lg relative block w-full px-3 py-2 border border-gray-300 
                                    placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nombre Completo"></input>
                                    </div>
                                    <div>
                                        <label htmlFor="email-address" className="sr-only">Email</label>
                                        <input type="email" autoComplete="email" onChange={(e) => ValidateEmail(e.target.value)} required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 
                                    placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${emailVerification === 'empty' ? "bg-white" : ""} ${emailVerification === 'correct' ? "bg-green-100" : ""} ${emailVerification === 'incorrect' ? "bg-red-800" : ""}`} placeholder="Email"></input>
                                    </div>
                                    <div >
                                        <label htmlFor="email-address" className="sr-only ">Email</label>
                                        <input type="email" autoComplete="email" onChange={(e) => EmailsMatch(e.target.value)} required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 
                                    placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${emailMatch === 'empty' ? "bg-white" : ""} ${emailMatch === 'correct' ? "bg-green-100" : ""} ${emailMatch === 'incorrect' ? "bg-red-800" : ""}`} placeholder="Confirmar Email"></input>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="sr-only">Teléfono</label>
                                        <input type="tel" autoComplete="tel" onChange={(e) => setPhone(e.target.value)} required className="appearance-none rounded-b-lg relative block w-full px-3 py-2 border border-gray-300 
                                    placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Teléfono"></input>
                                    </div>
                                </div>
                                <div className="flex space-x-2 justify-center">
                                    <button onClick={sumitOrder} className="bg-black text-white font-bold rounded p-2" >Terminar Orden</button>
                                    <Link to={`/cart`}>
                                        <button className="font-bold bg-white border-black border-2 rounded p-2">Volver al Carrito</button>
                                    </Link>
                                </div>
                            </form>
                        )}
                    {/* DETALLES */}
                    <div className="m-4 sm:m-8 space-y-6 sm:w-1/2" >
                        <h4>Detalles de Compra</h4>
                        {cart.map(element => <CartItem key={element.id} id={element.id} title={element.title}
                            pictureUrl={element.pictureUrl} price={element.price} amount={element.amount} />)}
                        <p className="w-full text-center text-2xl font-bold mt-5">Total : ${total}</p>
                    </div>
                </div>
                )
                : (
                    <div>
                        <h3 className="font-bold text-3xl text-center mt-16">Compra Confirmada!</h3>
                        <p className="text-center">Tu numero de confirmacion es: {purchaseConfirmation.id}</p>
                    </div>
                )}
        </div>

    )
}

export default CartCheckout