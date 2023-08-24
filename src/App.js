import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'

function App() {
  const [show, setShow] = useState(false)
  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShow(!show)}
          show={show} />

      </div>
    </Router>
  );
}

export default App;
