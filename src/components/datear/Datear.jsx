import React from 'react';
import { Link } from 'react-router-dom';
import { DatearItem } from './DatearItem/DatearItem';

export const Datear = () => {
  return (
    <div className="Datear__background">
      <div className="Datear__header" id="inicio">
        <div className="nav">
          <ul>
            <li><Link className="a" to="#inicio">Inicio</Link></li>
            <li><Link className="a" to="#datear">Datas</Link></li>
            <li><Link className="a" to="login">Login</Link></li>
          </ul>
        </div>
        
        <div className="Datear__logo">
          <div className="Datear_logo_container">
            <div className="Datar__img"></div>
            <h1>dateAR</h1>
          </div>
        </div>
      </div>

      <div className="Datear__container" id="datear">
        <div className="Datear__table">
          <DatearItem/>
        </div>

        <div className="Datear__article">
          
        </div>
      </div>
    </div>
  )
}
