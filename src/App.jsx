import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Quizpage from './components/Quizpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Quizpage/>
      
      
    </div>
  )
}

export default App
