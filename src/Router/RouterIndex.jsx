import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { login } from '../actions/login';
import { Login } from '../auth/Login';
import { Register } from '../auth/Register';
import { Datear } from '../components/datear/Datear';
import { RouterPanel } from './RouterPanel';

export const RouterIndex = () => {

  const dispatch = useDispatch();
  const { token }  = useSelector(state => state.auth);  
  const [check, setCheck] = useState(true);
  const [IsLogged, setIsLogged] = useState(false);

  useEffect(() => {
    axios.post(`http://127.0.0.1:8000/api/users/auth/token`, {}, { 
      headers: {
        'x-token': localStorage.getItem(`token`)
      }
    }).then(({data}) => {
        dispatch(login(data.msg));
        setIsLogged(true);
        setCheck(false);
      })
      .catch(() => {
        setIsLogged(false);
        setCheck(false);
      });
  }, [dispatch, token]);

  if (check) {
    return (
      <div className="App__container">
        <div className="preloder" >
          <div className="loader"> </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div>
        { IsLogged }
        <Routes>
          <Route exact 
            path="/login" 
            element={
              (!IsLogged) ? 
                <Login/> 
                  : 
                <Navigate replace to="/dashboard"/>
            }
          />
          <Route 
            exact 
            path="/register" 
            element={
              (!IsLogged) ? 
                <Register/> 
                  : 
                <Navigate replace to="/dashboard"/>
            }
          />
          <Route 
            exact 
            path="/dashboard/*" 
            element={(IsLogged) ? <RouterPanel/> : <Navigate replace to="/login"/>}
          />
          <Route 
            exact 
            path="/" 
            element={<Datear/>}
          />
        </Routes>
      </div>
    </Router>
  )
}
