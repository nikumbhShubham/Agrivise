
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './Components/Dashboard'
import LandingPage from "./Components/LandingPage"
import SearchPage from './Components/Search'
import SignupPage from './Components/SignupPage'

function App() {

  return (
    <>
      <Router>
      <div>
        <Routes>
          {/* Define the routes for your components */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
    









      {/* 
      <SearchPage/>
      <Dashboard/>
      <SignupPage/> */}
    </>
  )
}

export default App
