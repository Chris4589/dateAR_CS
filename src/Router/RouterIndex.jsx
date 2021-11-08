import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Login } from '../auth/Login';
import { Register } from '../auth/Register';
import { Datear } from '../components/datear/Datear';

export const RouterIndex = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/" element={<Datear/>}/>
        </Routes>
      </div>
    </Router>
  )
}
