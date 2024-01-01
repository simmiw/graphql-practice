import CompanyDetails from './components/CompanyInfo/companyDetails'
import { Launches } from './components/missions/launches'
import { Ships } from './components/missions/ships'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Launches />} />
      <Route path="/ships" element={<Ships />} />
      <Route path="/companyDetails" element={<CompanyDetails />} />
    </Routes>
  )
}

export default App
