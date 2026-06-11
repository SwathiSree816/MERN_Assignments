import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/register';
import Form from 'react-bootstrap/Form';
import Login from './components/login';
import Home from './components/home';
import Navbar from './components/navbar';
import ProtectedRoute from './components/protectedRoute'
import MyApp from './components/myApp';
function App() {
  return ( 
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MyApp/>}></Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
   );
}

export default App