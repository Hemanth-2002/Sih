import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import EditForm from "./components/update/EditForm"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from "./components/Add/Add"
import Schedule from "./components/Schedule/Schedule"
import Login from "./components/Login/Login"
import Home from "./components/Home/Home"

function App() {
  localStorage.setItem("auth",false)
  return (
    <>
    <div className="App">
      <div className="App">

        {
          localStorage.getItem("auth")===false?<Login/>:<div></div>
        }

      </div>
    </div>
    <BrowserRouter>
    <Routes>
    <Route exact path='/EditForm' element={<EditForm/>}/>
    <Route exact path='/Add' element={<Add/>}/>
    <Route exact path='/Schedule' element={<Schedule/>}/>
    <Route exact path='/Home' element={<Home/>}/>
    <Route exact path="/" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
