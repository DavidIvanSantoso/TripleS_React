/* eslint-disable no-unused-vars */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './Footer/Footer';
//pages
import MainPage from './MainPage/MainPage';
import LandingPage from './LandingPage/LandingPage'
import MemberPage from './Members/MemberProfile'
import FormDiscussion from './Discussion/DiscussionForm';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100"> {/* This will ensure the footer sticks to the bottom */}
        <div className="flex-fill">
          <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/member" element={<MemberPage/>} />
          <Route path="/discussion" element={<FormDiscussion/>} />
          </Routes>
        </div>
        <Footer /> 
      </div>
     </Router>
  )
}

export default App
