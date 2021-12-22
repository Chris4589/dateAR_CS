import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export const Sidebar = ({className}) => {
  
  return (
    <div className={className}>
      <div className="Dashboard_User">
        <img className="Dasboard_profile_image" srcSet="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/89/897d7a6a36683fad4e373e95ddc26ad32843b089_full.jpg" alt=""/>
        <h4 className="Dashboard_profile_name">CS-Mexico</h4>
      </div>
      <div className="Dashboard_myAccount">
        <p className="Dashboard_myRole">
          MyAccount - ADMIN.
        </p>
      </div>

      <ul className="Dashboard_myOptions">
        <li>
          <Link className="li li-text" to="/dashboard/">Dashboard</Link> <i className="fa fa-dashboard li-text"></i>
        </li>
        <li>
          <Link className="li li-text" to="/dashboard/servers">Servers</Link> <i className="fa fa-server li-text"></i>
        </li>
        <li>
          <Link className="li li-text" to="/dashboard/admin-roles">Admin Classes</Link> <i className="fab fa-critical-role li-text"></i>
        </li>
        <li>
          <Link className="li li-text" to="/dashboard/admins">Admins</Link> <i className="fa fa-buysellads li-text"></i>
        </li>
        <li>
          <Link className="li li-text" to="/dashboard/settings">Settings</Link> <i className="fa fa-cog li-text"></i>
        </li>
      </ul>

      <div className="Dashboard_LogOut">
        <ul className="Dashboard_myOptions">
          <li><i className="fa fa-sign-out"></i> Logout </li>
        </ul>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string.isRequired,
};