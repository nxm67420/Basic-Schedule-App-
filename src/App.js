//Import Logo 
import logo from './logo.svg';
//Import CSS File
import './css/App.css';
import './css/Modal.css'
import styles from '../src/css/EventList.module.css'
//Import React 
import React, { useState } from 'react';
//Import A Component
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  //States 
  const [name, setName] = useState('Original Text');
  const [showOptions, deleteOptions] = useState(true);

  const [showModal, setModal] = useState(false) /*Close Modal Box*/
  const [showEvents, setEventsDisplay] = useState(false)//Show Event List Modal

  //Object Containing States
  const [events, newEvent] = useState([' ']);

  const [currentJob, newJob] = useState([
    { position: "Team Lead", num: 0 },
    { position: "Accountant", num: 1 },
    { position: "Manager", num: 2 }
  ]);

  const [businesses, createBusiness] = useState([
    { title: "Hospital", value: 1 },
    { title: "Bank", value: 2 },
    { title: "School", value: 3 }
  ])

  //Methods
  // Map == Displaying 
  // eslint-disable-next-line
  const displayEvents = (id, index) => { 
    newEvent(events.map((event) => { 
      console.log(id + ". " + event.title);
      return id !== event.id;
    }))
  }

  //Add Event To Array of Events
  const addEvent = (event, index) => { 
    newEvent((prevEvents) => { 
      return [...prevEvents, event];
    }) 
    setModal(false)
  }

  //Delete events
  const deleteEvent = (id) => { 
    newEvent((prevEvents) => {
      return prevEvents.filter((event) => {
        console.log(`${event.title} deleted successfully`)
        return id !== event.id;
      })
    })
  }
  
  //Change Variable Text 
  // eslint-disable-next-line
  const changeText = () => { 
    setName("Great, You're Learning React");
    console.log(name);
  }
  
  //Delete Job Button 
  //Filter == Removing 
  const deleteJob = (num) => { 
    newJob(currentJob.filter((job) => { 
      console.log("Deleted " + job.position);
      return num !== job.num;
    }))
  }

  //Delete Business Button 
  const deleteMe = (value) => { 
    createBusiness((prevEvents) => { 
      return prevEvents.filter((business) => { 
        return value !== business.value;
      })
    })
  }

  console.log(showModal)

  //Hide Modal 
  const hideModal = () => { 
    setModal(false)
    console.log(showModal);
  }

  const closeOut = () => { 
    setModal(true);
  }

  //Application 
  return (
    //Parent Element 
    <div className="App">

      {/* Title Component */}
      <Title title="Site is under going maintenace"
        subtitle="Please remain patient" />


      {/* Heading */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* NOT IN USE */}
        {/*EventList Component*/ }
        {/* {showEvents && <EventList closeOut={() => setEventsDisplay(true)}>
          {events.map((event) => ( 
            <div className={styles.card} key={event.id}>
              <h2>{event.title}
                <button onClick={() => deleteEvent(event.id)}>
                  Delete This
                </button>
              </h2>
            </div>
          ))}
        </EventList>} */}
        
        <div>
          <p><span>List of Events</span></p>
          <button style={{ float: "right" }} onClick={() => deleteOptions(true)}>Show</button>
          &nbsp;
          <button style={{ float: "left" }} onClick={() => deleteOptions(false)}>Hide</button>
        </div>

        {/* Display Events */}
        {showOptions && <EventList
                        events={events}
                        closeOut={closeOut }
                        deleteEvent={deleteEvent} />}
        
      {/* <Modal>
        <h1>Congratulations</h1>
        <p>Youre a WINNER!!!</p>
      </Modal> */}

      {/* Modal Component */}
      {/*Hide Modal*/}
        {showModal &&
                      <Modal
                        closeBox={hideModal}
                        changeColor={false}>
                          <NewEventForm
                            addEvent={addEvent} />
                      </Modal>
        }

      {/*Show Modal*/}
      <button onClick={() => setModal(true)}>Add New Event</button>

        {/* Map Through Business List  */}
        {/* {showOptions && businesses.map((business) => (
          <div key={business.value}>
            <h1>{business.title}
              <button onClick={() => deleteMe(business.value)}>Delete Business</button>
            </h1> 
          </div>
        ))} */}
        
        
        {/* Map Through Job List */}
        {/* {currentJob.map((job, index) => (
          <React.Fragment key={job.num}>
            <h2>{index + 1}. {job.position}
              <button onClick={() => deleteJob(job.num)}>Delete Job</button>
            </h2> 
          </React.Fragment>
        ))} */}
    
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );//End of Application 
}

export default App;
