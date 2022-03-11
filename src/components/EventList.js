//rfc To Create new App Component
import React from 'react'
import '../css/Modal.css'
import styles from '../css/EventList.module.css'

export default function EventList({events, deleteEvent, closeOut }) {
  return (
      <div>
      <h2 style={{color: "#bc5acb"}}>List of Events: </h2>
        {events.map((event, index) => (
          <div className={styles.card} key={event.id} >
            <h2 style={{color: "#4558e6"}}>
              {event.title}
            </h2>
            <button onClick={() => deleteEvent(event.id)}>
                Delete
            </button>
          </div>
        ))}
        {/* <button onClick={closeOut}>Close Events</button> */}
      </div>
  )
}

