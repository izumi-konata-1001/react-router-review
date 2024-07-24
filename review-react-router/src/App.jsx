import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Course from './Course';
import University from "./University";
import User from "./User";
import UniversityList from "./UniversityList";
import CourseList from "./CourseList";
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="Content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/course" element={<Course />} />
            <Route path="/university" element={<University />} />
            <Route path="/university_list" element={<UniversityList />} />
            <Route path="/user" element={<User />} />
            <Route path="/course_list" element={<CourseList />} />
          </Routes>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;