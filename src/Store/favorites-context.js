import { createContext } from "react";
import { useState } from "react";

const FavoritesContext=createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite:(favoritesmeetup)=>{},
    removeFavorite:(meetupid)=>{},
    itemIsFavorite:(meetupid)=>{}
})


export function FavoritesContextProvider(props){

    const addFavoritesHandler=(favoritesmeetup)=>{
        setUserFavs((prevFavorites)=>{
            return prevFavorites.concat(favoritesmeetup)
        })
    
    }
    const removeFavoritesHandler=(meetupid)=>{
        setUserFavs(prevFavorites=>{
            return prevFavorites.filter(meetup=>meetup.id!=meetupid)
        })
    
    }
    const itemIsFavoritesHandler=(meetupid)=>{
        return userFavorites.some(meetup=>meetup.id==meetupid)
    
    
    }


    const [userFavorites,setUserFavs]=useState([])
const context={
    favorites:userFavorites,
    totalFavorites:userFavorites.length,
    addFavorite :addFavoritesHandler,
    removeFavorite:removeFavoritesHandler,
    itemIsFavorite:itemIsFavoritesHandler

}


    return(
        <FavoritesContext.Provider value={context}>
            {props.children}

        </FavoritesContext.Provider>
    )
}
export default FavoritesContext;