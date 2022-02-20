import React from 'react'
import '../css/Modal.css'
import ReactDOM from 'react-dom'

export default function Modal(props) {
  return ReactDOM.createPortal((
      <div className="modal-backdrop">
          <div className="modal" style={{
              border: "4px solid",
              borderColor: props.changeColor ? "green" : "purple",
              textAlign: "center",
          }}>
              {props.children}
              <button onClick={props.closeBox}
                     className={props.changeColor ? "sales-btn" : ""}>
                  Close Modal
              </button>
          </div>
      </div>
  ), document.body)
}
