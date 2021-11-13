import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom';
import { Panel } from './Panel';

export const Dashboard = () => {
  return (
    <div className="Dashboard__panel">
      <h1>Dashboard</h1>
      <Routes>
        <Route exact path="/" element={<Panel/>}/>
      </Routes>
    </div>
  )
}
