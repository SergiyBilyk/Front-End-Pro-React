import * as React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from './components/Home'
import About from "./components/About";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Courses from "./components/Courses";
import SingleCours from "./components/SingleCours";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Courses/:slug" element={<SingleCours />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
