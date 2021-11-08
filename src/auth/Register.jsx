import React from 'react'
import {
  Link,
} from 'react-router-dom';

export const Register = () => {
  return (
    <div className="Login__container">
      <form className="Login__form">
        <h1 className="Login__title">Register</h1>

        <div className="Login__form-group">
          <span className="Login__text_gray">User:</span>
          <div className="Login__input-group Login__border">
            <span>
              <i className="fa fa-user Login__icon"/>
            </span>
            <input type="text" className="Login__input" />
          </div>
        </div>

        <div className="Login__form-group">
          <span className="Login__text_gray">Password:</span>
          <div className="Login__input-group Login__border">
            <span>
              <i className="fa fa-eye Login__icon"/>
            </span>
            <input type="text" className="Login__input" />
          </div>
        </div>

        <div className="Login__form-group">
          <button className="Login__btn Login__success">
            Registrar
          </button>
        </div>

        <div className="Login__form-group">
          <p className="Login__text_gray Login_text-dev">Puedes donar al desarrollador: <a target="noreferrer" href="https://www.paypal.com/paypalme/chrishyp">Paypal</a> </p>
          <p className="Login__text_gray Login_text-dev">
            ¿Ya tienes una cuenta?  
            <Link
              to="/login"
            >
              Login  
            </Link> 
          </p>
        </div>

      </form>
    </div>
  )
}
