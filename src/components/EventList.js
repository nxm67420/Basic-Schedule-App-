//rfc To Create new App Component
import React from 'react'
import '../css/Modal.css'
import styles from '../css/EventList.module.css'

export default function EventList(props) {
  return (
      <div className="modal-backdrop">
        <div className="modal">
            <div className={styles.card}>
              <h2>Heres Your List: </h2>
              {props.children} 
              <button onClick={props.closeOut}>Close Events</button>
            </div>
        </div>
      </div>
  )
}
