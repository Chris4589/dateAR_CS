import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/login';

export const Sidebar = ({className}) => {
  const { username, foto, roles }  = useSelector(state => state.auth); 
  const dispatch = useDispatch();

  const thislogout = () => {
    localStorage.removeItem(`token`);
    dispatch(logout());
  }
  
  return (
    <div className={className}>
      <div className="Dashboard_User">
        <img className="Dasboard_profile_image" srcSet={foto} alt=""/>
        <h4 className="Dashboard_profile_name">{ username }</h4>
      </div>
      <div className="Dashboard_myAccount">
        <p className="Dashboard_myRole">
          MyAccount - { roles?.map(rol => rol.name).includes('USUARIO') ? 'USUARIO' : 'ADMIN' }.
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
          <li onClick={thislogout}><i className="fa fa-sign-out"></i> Logout </li>
        </ul>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string.isRequired,
};