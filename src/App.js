import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks';

function App() {
  const [show, setShow] = useState(false)
  const [tasks, setTasks] = useState(dbData)

  // useEffect(() => {
  //   const getTasks = async () => {
  //     // const tasksFromServer = await fetchTasks()
  //     setTasks(fetchTasks)
  //   }
  //   getTasks()
  // }, [])

  // const fetchTasks = async () => {
  //   const res =
  //     [
  //       {
  //         "tasks": [
  //           {
  //             "id": 1,
  //             "text": "Doctors Appointment",
  //             "day": "Feb 5th at 2:30pm",
  //             "reminder": true
  //           },
  //         ]
  //       }
  //     ]

  //   return res
  // }
  console.log(dbData.tasks.map(e => e.text))
  const textList = (dbData.tasks.map(e => e.text))
  // const listTasks = () => {
  //   for (let i = 0; dbData.tasks.lengh > i; i++) {
  //     console.log(tasks.tasks[i].text)
  //     return tasks.tasks[i].text
  //   }
  // }

  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShow(!show)}
          show={show}
        />
        {tasks.tasks[0].id > 0 ? (
          <ol>
            {dbData.tasks.map(e => (
              <li>
                {e.text}
              </li>
            ))}
          </ol>) : (
          'No tasks to Show'
        )}
      
        {/* {tasks.tasks[0].id > 0 ? (
          // <Tasks
          //   dbData={dbData}
          // />
        ) : (
          'No tasks to Show'
        )} */}
        
      </div>
    </Router>
  );
}
const dbData =
{
  "tasks": [
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Haircut Appointment",
      "day": "Aug 23th at 5:00pm",
      "reminder": true
    },
    {
      "id": 3,
      "text": "Market Appointment",
      "day": "Aug 23th at 6:00pm",
      "reminder": true
    },
  ]
}





export default App;
