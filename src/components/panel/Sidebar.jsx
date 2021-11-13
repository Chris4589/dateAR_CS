import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export const Sidebar = ({className}) => {
  
  return (
    <div className={className}>
      <div className="Dashboard_User">
        <img className="Dasboard_profile_image" srcSet="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/11/10/16365576942670.jpg" alt=""/>
        <h4 className="Dashboard_profile_name">mai enemi</h4>
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