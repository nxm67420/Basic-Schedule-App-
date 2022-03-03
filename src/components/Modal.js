import React from 'react'
import '../css/Modal.css'
import ReactDOM from 'react-dom'

export default function Modal({closeBox, changeColor, children}) {
  return ReactDOM.createPortal((
      <div className="modal-backdrop">

          <div className="modal" style={{
              border: "4px solid",
              borderColor: changeColor ? "green" : "purple",
              textAlign: "center",
          }}>
              {children}
              <button onClick={closeBox}
                     className={changeColor ? "sales-btn" : ""}>
                  Cancel
              </button>
          </div>
          
      </div>
  ), document.body)
}
