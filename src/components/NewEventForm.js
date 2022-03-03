import '../css/NewEventForm.css'
import React from 'react'
import { useState } from 'react'

export default function NewtitleForm({addEvent}) {
  //Variables
  const [title, setTitle] = useState('');/*Set Event Title */
  const [date, setDate] = useState(''); /*Set Event Date */
  
  //Clear Form Inputs
  const resetForm = () => { 
    setTitle('');
    setDate('');
  }

  //Submit Form ActionEvent
  const submitForm = (action) => { 
    
    action.preventDefault();//Stop Browser Refresh 

    //Create Event Object 
    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000)
    }

    addEvent(event);
    console.log(event)//Print Event Object
    resetForm();//Clear Input Fields 

  }//end of submit button 

  return (
    <form className="new-event-form" onSubmit={submitForm}>

      {/* Input Title */}
      <label>
        <span style={{color: "red"}}>Event Title: </span>
        <input
          type="text"
          onChange = {(e) => setTitle(e.target.value)}
          value = {title}
        />
      </label>

      {/* Input Date */}
      <label>
        <span style={{color: "red"}}>Event Date: </span>
        <input
          type="Date"
          onChange = {(e) => setDate(e.target.value)}
          value = {date}
        />
      </label>
      
      {/* Submit Form Button */}
      <button type="submit">submit</button>

    </form>
  )
}
