import React from 'react'
import { Card } from '../ui/Card';
import { useContext } from 'react';
import FavoritesContext from '../../Store/favorites-context';
import './MeetupItem.css'

export const MeetupItem = ({meetup}) => {

  const fav_context=useContext(FavoritesContext)
  const itemFavorites=fav_context.itemIsFavorite(meetup.id)
  function toggleFavoriteStateHandler(){
    if(itemFavorites){
      fav_context.removeFavorite(meetup.id)
    }else{
      fav_context.addFavorite(meetup)
    }

  }
    return (
     
        <div>
           <Card>
         <li className="item">
           <div className="image">
             <img src={meetup.image} alt=""/>
             </div>
             <div className="content">
               <h3>{meetup.title}</h3>
               <address>{meetup.address}</address>
               <p>{meetup.description}</p>
               </div>
               <div className="actions">
                 <button onClick={toggleFavoriteStateHandler}>{itemFavorites?"remove from favorites":"To favorites"}</button>
                 </div>
                 </li>
                 </Card>
        </div>
       
    )
}
