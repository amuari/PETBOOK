import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Hompepage from './components/Hompepage'
import Login from './components/Login'
import Pets from './components/Pets'
import Upload from './components/Upload'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hompepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/pets' element={<Pets />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
