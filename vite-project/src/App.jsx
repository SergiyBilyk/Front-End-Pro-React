import {Routes, Route, NavLink} from 'react-router-dom';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import AboutUs from './components/pages/AboutUs';
import NotFound from './components/pages/NotFound';
import './App.css'

function App() {

  return (
  <div className='container'>
    <nav>
      <NavLink to='/' className='nav'>Home</NavLink>
      <NavLink to='/contacts' className='nav'>Contacts</NavLink>
      <NavLink to='/aboutus' className='nav'>About Us</NavLink>
    </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </div>
  )
}

export default App
