import axios from 'axios';
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { useForm } from "react-hook-form";

export const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const ValidationsLogin = {
    email: register("email", { required: true, minLength:3 }),
    password: register("password", { required: true, minLength:3 }),
  };
  
  const onSubmit = (data) => {
    console.log(data)
  };

  const responseFacebook = ({accessToken, userID}) => {
    // 
    axios.post(`http://127.0.0.1:8000/api/users/auth/fb?accessToken=${accessToken}&userID=${userID}`)
    .then(() => console.log('loged'))
    .catch((e)=> console.log(JSON.stringify(e)));
  }
  return (
    <div className="Login__container">
      <form className="Login__form" >
        <h1 className="Login__title">Login</h1>

        <div className="Login__form-group">
          <span className="Login__text_gray">User:</span>
          <div className="Login__input-group Login__border">
            <span>
              <i className="fa fa-user Login__icon"/>
            </span>
            <input type="text" { ...ValidationsLogin.email } defaultValue='' className="Login__input" />
          </div>
          {errors.email?.type === 'required' && <span>El email es requerido.</span>}
          {errors.email?.type === 'minLength' && <span>El email requiere mas de 3 caracteres.</span>}
        </div>

        <div className="Login__form-group">
          <span className="Login__text_gray">Password:</span>
          <div className="Login__input-group Login__border">
            <span>
              <i className="fa fa-eye Login__icon"/>
            </span>
            <input type="text" { ...ValidationsLogin.password } defaultValue='' className="Login__input" />
          </div>
          {errors.password?.type === 'required' && <span>la contraseña es requerida.</span>}
          {errors.password?.type === 'minLength' && <span>La contraseña requiere 3 caracteres o más.</span>}
        </div>

        <div className="Login__form-group">
          <button className="Login__btn Login__success" onClick={handleSubmit(onSubmit)}>
            Entrar
          </button>
        </div>

        <div className="Login__form-group">
          <FacebookLogin
            appId="61761974594342811"
            textButton="   Entrar con Facebook"
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="Login__btn Login__fb"
            icon="fa-facebook"
          />
        </div>

        <div className="Login__form-group">
          <p className="Login__text_gray Login_text-dev">Puedes donar al desarrollador: <a target="noreferrer" href="https://www.paypal.com/paypalme/chrishyp">Paypal</a> </p>
        </div>

      </form>
    </div>
  )
}
