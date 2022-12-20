import React, { useState, useEffect } from 'react'
import { firestore, auth } from '../firebaseConfig';


//Context
export const AuthenticationContext = React.createContext();

//Custom Provider
function AuthProvider({ children }) {

    const [isUserLogged, setIsUserLogged] = useState()
    const [currentUser, setcurrentUser] = useState()
    const [userFavItems, setUserFavIems] = useState([])

    // Verify session status
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

    const createUser = (name, phone, email, password) => {

        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                const uid = user.user.uid
                SaveUserInfo(name, phone, email, uid)
            })
            .catch((error) => {
                alert("An error occurred, please try again later.")
            });

    }

    const LogUser = (email, password) => {

        auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
            })
            .catch((error) => {
                alert("An error occurred, please try again later.")
            });

    }


    // Stores user information in the users collection
    const SaveUserInfo = (name, phone, email, uid) => {

        const newUser = {
            name: name,
            phone: phone,
            email: email,
            favItems: []
        }

        const db = firestore
        const users = db.collection('users')

        //send the user to firebase , use the uid as id
        users.doc(uid).set(newUser)
            .then(() => {
            })
            .catch((error) => {
                alert("An error occurred, please try again later")
                console.log(error)
            })
    }

    const GetUser = () => {

        const currentUserID = auth.currentUser.uid
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

        query
            .then((result) => {
                setUserFavIems(result.data().favItems)
            })        
            .catch((e) => {
                console.log("Error: " + e)
            })
    }

    const addFavItem = (itemId) => {

        const currentUserID = auth.currentUser.uid
        const newFavItem = itemId
        let favItemsArray = []
        const db = firestore
        const collection = db.collection('users').doc(currentUserID)
        const query = collection.get()

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
                            alert("An error occurred, please try again later")
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
