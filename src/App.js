import { Routes,Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Main from "./Main";
import Signin from './Pages/Signin';
import Signup from "./Pages/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*landing" element={<Main/>}/>
        <Route path="/" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  )
}
export default App;