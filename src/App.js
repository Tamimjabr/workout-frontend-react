import { Routes, Route } from 'react-router-dom'
import Exercises from './components/Exercises'
import Plans from './components/Plans'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Plans />} />
        <Route path='/plans/:id/exercises' element={<Exercises />} />
      </Routes>
    </div>
  )
}

export default App
