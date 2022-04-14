import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import EditForm from "./components/update/EditForm"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from "./components/Add/Add"

function App() {
  return (
    <>
    <div className="App">
      <div className="App">
        <Navbar />
      </div>
    </div>
    <BrowserRouter>
    <Routes>
    <Route exact path='/EditForm' element={<EditForm/>}/>
    </Routes>
    </BrowserRouter>

    <BrowserRouter>
    <Routes>
    <Route exact path='/Add' element={<Add/>}/>
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
