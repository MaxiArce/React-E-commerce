import React, { useState, useEffect } from 'react'
import { firestore, auth } from '../firebaseConfig';


// Declaro el context 
export const AuthenticationContext = React.createContext();

//Custom Provider
function AuthProvider({ children }) {

    const [isUserLogged, setIsUserLogged] = useState()
    const [currentUser, setcurrentUser] = useState()
    const [userFavItems, setUserFavIems] = useState([])

    // Verifica el estado de la sesión
    auth.onAuthStateChanged(function (user) {
        if (user) {
            setIsUserLogged(true)
        } else {
            setIsUserLogged(false)
        }
    });

    useEffect(() => {
        if (isUserLogged) {
            GetUser()
            GetFavItems()
        }
    }, [isUserLogged])


    //Crea usuario 
    const createUser = (name, phone, email, password) => {

        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                const uid = user.user.uid
                SaveUserInfo(name, phone, email, uid)
            })
            .catch((error) => {
                alert("Se produjo un error, intentalo de nuevo mas tarde")
            });

    }
    const LogUser = (email, password) => {

        auth.signInWithEmailAndPassword(email, password)
            .then((user) => {

            })
            .catch((error) => {
                alert("Se produjo un error, intentalo de nuevo mas tarde")
            });

    }


    // Guarda la informacion del usuario en la coleccion users
    const SaveUserInfo = (name, phone, email, uid) => {

        //nuevo objeto user
        const newUser = {
            name: name,
            phone: phone,
            email: email,
            favItems: []
        }

        //referencia
        const db = firestore
        const users = db.collection('users')

        //envia el usuario a firebase , usa el uid como id
        users.doc(uid).set(newUser)
            .then(() => {
            })
            .catch((error) => {
                alert("Se produjo un error, intentalo de nuevo mas tarde")
                console.log(error)
            })
    }


    const GetUser = () => {

        const currentUserID = auth.currentUser.uid

        //llamo a firebase para pedir el usuario
        const db = firestore
        const collection = db.collection('users').doc(currentUserID)
        const query = collection.get()
        query
            .then((result) => {
                setcurrentUser(result.data())
            })
            .catch((e) => {
                console.log("Error: " + e)
            })

    }

    const SignOut = () => {
        auth.signOut()
    }

    const GetFavItems = () => {
        //current user
        const currentUserID = auth.currentUser.uid
        const db = firestore
        const collection = db.collection('users').doc(currentUserID)
        const query = collection.get()

        //Consulta los favoritos del usuario
        query
            .then((result) => {
                setUserFavIems(result.data().favItems)
            })        
            .catch((e) => {
                console.log("Error: " + e)
            })
    }

    const addFavItem = (itemId) => {

        //current user
        const currentUserID = auth.currentUser.uid

        //nuevo item
        const newFavItem = itemId

        //array temporal de items favoritos  
        let favItemsArray = []

        const db = firestore
        const collection = db.collection('users').doc(currentUserID)
        const query = collection.get()

        //Consulta los favoritos del usuario
        query
            .then((result) => {
                favItemsArray = (result.data().favItems)

                if (!favItemsArray.includes(itemId)) {
                    //solo lo agrega si no existe en el listado
                    const newFavItemsArray = ({ favItems: [...favItemsArray, newFavItem] })

                    collection.update(newFavItemsArray)
                        .then(() => {
                        })
                        .catch((error) => {
                            alert("Se produjo un error, intentalo de nuevo mas tarde")
                            console.log(error)
                        })
                } else {
                    alert("El item ya existe en tu listado")
                }
            })
            .catch((e) => {
                console.log("Error: " + e)
            })
    }


    return (
        <AuthenticationContext.Provider value={{ createUser, LogUser, isUserLogged, SignOut, currentUser, addFavItem ,userFavItems}}>
            { children}
        </AuthenticationContext.Provider>
    )
}

export default AuthProvider;
