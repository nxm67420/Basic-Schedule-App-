//rfc To Create new App Component
import React from 'react'
import '../css/Modal.css'
import styles from '../css/EventList.module.css'

export default function EventList({events, deleteEvent, closeOut }) {
  return (
      <div >
            <div className={styles.card}>
              <h2>List of Events: </h2>
              {events.map((event) => (
                <div key={event.id} >
                  <h2 style={{color: "#4558e6"} }>
                    {event.title}
                    <button onClick={() => deleteEvent(event.id)}>
                      Delete
                    </button>
                  </h2>
                </div>
              ))}
              {/* <button onClick={closeOut}>Close Events</button> */}
            </div>
        
      </div>
  )
}

