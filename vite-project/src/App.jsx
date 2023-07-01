import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./App.css";

import List from "./List";

function App() {
  
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/users'>Users</Link>
      </nav>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
      </Routes>

    </div>
  )
  }
export default App;
