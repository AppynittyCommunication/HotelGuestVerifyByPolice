import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import MaybeShowNavbar from "./Components/MaybeShowNavbar/MaybeShowNavbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages';
import About from './Pages/about';
import DepartmentLogin from './Pages/DepartmentLogin';
import DepartmentRegistration from "./Pages/DepartmentRegistration";
import {HotelLogin} from "./Pages/HotelLogin";
import HotelRegistration from "./Pages/HotelRegistration";
import HotelLoginSuccess from "./Pages/HotelLoginSuccess";

function App() {
  // const[currentForm, setCurrentForm] = useState('departmentLogin');
  // const toggleForm = (formName) => {
  //     setCurrentForm(formName)
  // }
  return (
    // <div className="App">
    //   {
    //     currentForm === "departmentLogin"? <DepartmentLogin onFormSwitch={toggleForm}/> : <DepartmentRegistration onFormSwitch={toggleForm}/>
    //   }
     
    // </div>

    <Router>
      <MaybeShowNavbar>
      <Navbar />
      </MaybeShowNavbar>
      
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path='/about' element={<About/>} exact />
        <Route path='/departmentregistration' element={<DepartmentRegistration/>} exact />
        <Route path='/departmentlogin' element={<DepartmentLogin/>} exact/>
        <Route path='/hotelregistration' element={<HotelRegistration/>} exact />
        <Route path='/hotellogin' element={<HotelLogin/>} exact/>
        <Route path='/hotelloginsuccess' element={<HotelLoginSuccess/>} exact/>
      </Routes>
    </Router>
  );
}

export default App;
