import '../css/NewEventForm.css'
import React from 'react'
import { useState } from 'react'

export default function NewtitleForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  //Clear Form Inputs
  const resetForm = () => { 
    setTitle('');
    setDate('');
  }

  const submitForm = (e) => { 
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000)
    }
    console.log(event)
    resetForm();
  }

  return (
    <form className="new-event-form" onSubmit={submitForm}>
      {/* Input title Title */}
      <label>
        <span>Event Title: </span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      {/* Input Date */}
      <label>
        <span>title Date: </span>
        <input
          type="Date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <p>Title: {title}, Date: {date} </p>
      <p onClick={() => resetForm}>Clear Input</p>
      
      {/* Submit Form Button */}
      <button type="submit">submit</button>
    </form>
  )
}
