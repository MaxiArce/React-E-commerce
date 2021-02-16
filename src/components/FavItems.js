import React, {useContext, useEffect, useState} from 'react';
import { AuthenticationContext } from '../context/AuthenticationContext'
import { firestore } from '../firebaseConfig';


const FavItems = () => {

    const { userFavItems } = useContext(AuthenticationContext)

    const [favItems, setFavItems] = useState([])


    useEffect(() => {
        
        getFavItems()

    },[])
    

    const getFavItems = () =>{
                
        //trae cada favorito desde firestore
        userFavItems.map( element =>{

            const query = firestore.collection('items').doc(element).get()
            query
            .then((result) => {
                const elementTitle = result.data().title;
                const elementpictureUrl = result.data().pictureUrl;
                setFavItems([...favItems,{title:elementTitle, pictureUrl:elementpictureUrl}])
              })
              .catch((error) => {
                console.log(error)
            })
        })
    }

    return (
        <div className=" font-bold rounded mt-8 bg-gray-200">
            <h4 className="text-2xl text-black">Favoritos</h4>
            {favItems.length > 0 
            ? favItems.map( e=>{
                return (
                    <div className="bg-gray-600 rounded  my-5 p-2 w-1/2 flex flex-row h-24">
                        <p className="text-center">{e.title}</p>
                        <img src={e.pictureUrl}></img>
                    </div>
                )
            })
            :(
                <p className="text-center w-full">No hay favoritos</p>
            )}
        </div>
    )
}

export default FavItems