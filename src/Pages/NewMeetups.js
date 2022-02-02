import React from 'react'
import { NewMeetupForm } from '../components/meetup/NewMeetupForm'
import { useHistory } from 'react-router'

export const NewMeetups = () => {
    const history=useHistory()
    const onAdd=(meetupData)=>{
        fetch("https://meetup-2cc26-default-rtdb.firebaseio.com/meetup.json",{
            method:"post",
        body:JSON.stringify(meetupData),
    headers:{
        "Content-Type":"application/json"
    }
    }).then(()=>{
        history.replace("/")
    })
    }
    return (
        <div>
            <h1>new meetup</h1>
            <NewMeetupForm onAdd={onAdd}/>
        </div>
    )
}
