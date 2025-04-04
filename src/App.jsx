import React from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import Home from './pages/student/Home';
import CoursesList from './pages/student/CourseList';
import CourseDetails from './pages/student/CourseDetails';
import MyEnrollments from './pages/student/MyEntrollment';
import Player from './pages/student/Player';
import Loading from './components/student/Loading';
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import AddCourse from './pages/educator/AddCourse';
import MyCourses from './pages/educator/MyCourses';
import StudentEntrolled from './pages/educator/StudentEntrolled';
import Navbar from './Components/Student/Navbar'
import './App.css';

function App() {

  const isEducatorRoute=useMatch('/educator')
  return (
    <div className='text-default min-h-screen bg-white'>
   {!isEducatorRoute &&<Navbar />}   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator />} />
        <Route path="/educator/dashboard" element={<Dashboard />} />
        <Route path="/educator/add-course" element={<AddCourse />} />
        <Route path="/educator/my-courses" element={<MyCourses />} />
        <Route path="/educator/student-enrolled" element={<StudentEntrolled />} />
      </Routes>
    </div>
  );
}

export default App;