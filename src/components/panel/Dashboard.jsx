import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom';
import { AdminRoles } from './AdminRoles';
import { Admins } from './Admins';
import { Panel } from './Panel';
import { Servers } from './Servers';

export const Dashboard = () => {
  return (
    <div className="Dashboard__panel">
      <h1>Dashboard</h1>
      <Routes>
        <Route exact path="/" element={<Panel/>}/>
        <Route exact path="/servers" element={<Servers/>}/>
        <Route exact path="/admins" element={<Admins/>}/>
        <Route exact path="/admin-roles" element={<AdminRoles/>}/>
      </Routes>
    </div>
  )
}
