import React from 'react';

import { Dashboard } from '../components/panel/Dashboard';
import { Sidebar } from '../components/panel/Sidebar';

import { useClassName } from '../Hooks/useClassName';

export const RouterPanel = () => {

  const [addClassName, className] = useClassName('Dashboard__sidebar');

  return (
    <div className="Dashboard__container">
      <div className="Dashboard_menuBtn" onClick={addClassName}>
        <i className="fa fa-align-justify icon-btn"></i>
      </div>
      <Sidebar className={className}/>
      <Dashboard />
    </div>
  )
}
