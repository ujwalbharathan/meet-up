import React from 'react'
import { Link } from 'react-router-dom'
import './MainNavigation.css'
import { useContext } from 'react'
import FavoritesContext from '../../Store/favorites-context'

export const MainNavigation = () => {
    const context= useContext(FavoritesContext)
    return (
        <header className="header">
            <div className="heading">
                Meetup App
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                     <li>
                        <Link to="/new-meetup">New Meetups</Link>
                    </li>
                    <li>
                        <Link to="/favorite">Favorites</Link>
                        <span className="badge">{context.totalFavorites}</span>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}
