import React from 'react'
import { useForm } from 'react-hook-form';
import {
  Link,
} from 'react-router-dom';

export const Register = () => {

  const { handleSubmit, register, formState:{ errors } } = useForm();

  const validationsRegister = {
    email: register('email', { required: true, minLength: 3}),
    password: register('password', { required: true, minLength: 3 }),
  };

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="Login__container">
      <form className="Login__form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="Login__title">Register</h1>

        <div className="Login__form-group">
          <span className="Login__text_gray">User:</span>
          <div className="Login__input-group Login__border">
            <span>
              <i className="fa fa-user Login__icon"/>
            </span>
            <input 
              type="text" 
              { ...validationsRegister.email } 
              defaultValue='' 
              className="Login__input" 
            />
          </div>
          { errors.email?.type === 'required' && <span>El usuario es requerido.</span> }
          { errors.email?.type === 'minLength' && <span>El usuario necesita 3 caracteres o más.</span> }
        </div>

        <div className="Login__form-group">
          <span className="Login__text_gray">Password:</span>
          <div className="Login__input-group Login__border">
            <span>
              <i className="fa fa-eye Login__icon"/>
            </span>
            <input 
              type="text" 
              { ...validationsRegister.password } 
              defaultValue='' 
              className="Login__input" 
            />
          </div>
          { errors.password?.type === 'required' && <span>La contraseña es requerida.</span> }
          { errors.password?.type === 'minLength' && <span>La contraseña necesita 3 caracteres o más.</span> }
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
