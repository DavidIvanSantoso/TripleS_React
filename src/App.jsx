/* eslint-disable no-unused-vars */
import './App.css'
import LandingPage from './LandingPage/LandingPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import MainPage from './MainPage/MainPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './Footer/Footer';
function App() {
 
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100"> {/* This will ensure the footer sticks to the bottom */}
        <div className="flex-fill">
          <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/home" element={<MainPage />} />
          </Routes>
        </div>
        <Footer /> 
      </div>
     </Router>
  )
}

export default App
