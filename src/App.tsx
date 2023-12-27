import styles from './App.module.scss'
import { Launches } from './components/missions/launches'
import { Ships } from './components/missions/ships'
import { Routes, Route, useRoutes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Launches />} />
      <Route path="/ships" element={<Ships />} />
    </Routes>
  )
}

export default App
