import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import {
  Link,
} from 'react-router-dom';
import Swal from 'sweetalert2';
import { enviroments } from '../enviroments';
import { usePassword } from '../Hooks/usePassword';

export const Register = (props) => {

  const { handleSubmit, register, formState:{ errors } } = useForm();
  const { password, showPassword } = usePassword();

  const validationsRegister = {
    username: register('username', { required: true, minLength: 5 }),
    email: register('email', { required: true, minLength: 5, pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "invalid email address"
    }}),
    password: register('password', { required: true, minLength: 5 }),
  };

  const onSubmit = (data) => {
    axios.post(`${enviroments.address_host}/api/users`, data)
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Tu cuenta se creo satisfactoriamente!',
          showConfirmButton: false,
          timer: 3500
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.msg,
        });
      });
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
              { ...validationsRegister.username } 
              defaultValue='' 
              className="Login__input" 
            />
          </div>
          { errors.username?.type === 'required' && <span>El usuario es requerido.</span> }
          { errors.username?.type === 'minLength' && <span>El usuario necesita 5 caracteres o más.</span> }
        </div>

        <div className="Login__form-group">
          <span className="Login__text_gray">User:</span>
          <div className="Login__input-group Login__border">
            <span>
              <i className="fas fa-mail-bulk Login__icon"/>
            </span>
            <input 
              type="text" 
              { ...validationsRegister.email } 
              defaultValue='' 
              className="Login__input" 
            />
          </div>
          { errors.email?.type === 'required' && <span>El email es requerido.</span> }
          { errors.email?.type === 'minLength' && <span>El email necesita 5 caracteres o más.</span> }
          { errors.email?.type === 'pattern' && <span>Debe ser un email valido.</span> }
        </div>

        <div className="Login__form-group">
          <span className="Login__text_gray">Password:</span>
          <div className="Login__input-group Login__border">
            <span>
              <i className="fa fa-eye Login__icon" onClick={() => showPassword()}/>
            </span>
            <input 
              type={password ? "text" : "password"}
              { ...validationsRegister.password } 
              defaultValue='' 
              className="Login__input" 
            />
          </div>
          { errors.password?.type === 'required' && <span>La contraseña es requerida.</span> }
          { errors.password?.type === 'minLength' && <span>La contraseña necesita 5 caracteres o más.</span> }
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
