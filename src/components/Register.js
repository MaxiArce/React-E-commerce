import React, { useContext, useState } from 'react';
import { AuthenticationContext } from '../context/AuthenticationContext'


const Register = () => {

    const {createUser} = useContext(AuthenticationContext)
    
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailVerification, setEmailVerification] = useState("empty")
    const [emailMatch, setEmailMatch] = useState("empty")

    const summitNewUser = (e)=> {
        
        e.preventDefault();

        if(emailVerification === "correct" && emailMatch ==="correct" && password !== ""){
            createUser(name,phone,email,password)
        }else{
            alert("Verifica los campos")
        }
    }



    //verifica si el correo ingresado es correcto o no 
    const ValidateEmail = (mail) => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
            setEmailVerification("correct")
            setEmail(mail)
        }else if(mail === ''){
            setEmailVerification("empty")
            setEmail("")
        }else{
            setEmailVerification("incorrect")
            setEmail("")
        }
    }

    //verifica que el correo y la confirmacion coincidan
    const EmailsMatch = (mail) => {
        if(email === mail){
            setEmailMatch("correct")
        }else if(mail === ''){
            setEmailMatch("empty")
        }else{
            setEmailMatch("incorrect")
        }
    }


    return (
        
        <div className="">
            <form className="mt-16 flex flex-col space-y-6">
                <div className="w-full mx-auto shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="name" className="sr-only">Nombre Completo</label>
                        <input type="text" autoComplete="name" onChange={(e) => setName(e.target.value)} required className="appearance-none rounded-t-lg relative block w-full px-3 py-2 border border-gray-300 
                                    placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nombre Completo"></input>
                    </div>
                    <div>
                        <label htmlFor="phone" className="sr-only">Teléfono</label>
                        <input type="tel" autoComplete="tel" onChange={(e) => setPhone(e.target.value)} required className="appearance-none relative block w-full px-3 py-2 border border-gray-300 
                                    placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Teléfono"></input>
                    </div>
                    <div>
                        <label htmlFor="email-address" className="sr-only">Email</label>
                        <input type="email" autoComplete="email" onChange={(e) => ValidateEmail(e.target.value)} required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 
                                    placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${emailVerification === 'empty' ? "bg-white" : ""} ${emailVerification === 'correct' ? "bg-green-100" : ""} ${emailVerification === 'incorrect' ? "bg-red-800" : ""}`} placeholder="*Email"></input>
                    </div>
                    <div >
                        <label htmlFor="email-address" className="sr-only ">Email</label>
                        <input type="email" autoComplete="email" onChange={(e) => EmailsMatch(e.target.value)} required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 
                                    placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${emailMatch === 'empty' ? "bg-white" : ""} ${emailMatch === 'correct' ? "bg-green-100" : ""} ${emailMatch === 'incorrect' ? "bg-red-800" : ""}`} placeholder="*Confirmar Email"></input>
                    </div>
                    <div >
                        <label htmlFor="password" className="sr-only ">password</label>
                        <input type="password" autoComplete="password" onChange={(e) => setPassword(e.target.value)} required className="appearance-none rounded-b-lg relative block w-full px-3 py-2 border border-gray-300 
                                    placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="*Contraseña"></input>
                    </div>
                </div>
                <p className="font-light text-black text-sm mx-auto rounded p-2">*Campos obligatorios</p>
                <button  onClick={summitNewUser} className="font-bold text-white w-16 mx-auto bg-black rounded p-2">Listo!</button>
            </form>
        </div>
    )
}

export default Register