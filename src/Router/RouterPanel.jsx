import React from 'react';

import { Dashboard } from '../components/panel/Dashboard';
import { Sidebar } from '../components/panel/Sidebar';

export const RouterPanel = () => {
  return (
    <div className="Dashboard__container">
      <Sidebar/>
      <Dashboard />
    </div>
  )
}
