import React from 'react'
import FavoritesContext from '../Store/favorites-context'
import {MeetupList} from '../components/meetup/MeetupList'
import { useContext } from 'react'




export const Favorites = () => {
    const usecontext=useContext(FavoritesContext)
    if(usecontext.totalFavorites==0)
    {
        return <p>no favorities meetups</p>
    }else{
    return (
        <div>
            <h1>Favorites page</h1>
            <MeetupList meetuplist={usecontext.favorites}/>            
        </div>
    )
    }
}
