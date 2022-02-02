import React from 'react'
import './MeetupList.css'
import {MeetupItem} from './MeetupItem'

export const MeetupList = ({meetuplist}) => {
    return (
        <ul className="list">
            {
              meetuplist.map(meetup=><MeetupItem key={meetup.id} meetup={meetup}/>)
            }
            
        </ul>
    )
}
