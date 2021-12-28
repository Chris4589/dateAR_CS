import axios from "axios";
import Swal from "sweetalert2";
import { types } from "../types/types";

export const startLogin = (data, history) => {
  return (dispatch) => {
    axios.post(`http://127.0.0.1:8000/api/users/auth`, data)
      .then(({data}) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Logueado correctamente!',
          showConfirmButton: false,
          timer: 3500
        });
        localStorage.setItem(`token`, data.msg.token);//token
        dispatch(login(data.msg));
        history('/dashboard');
      })
      .catch((e) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'no se pudo encontrar tu cuenta!',
        });
      });
  }
}

export const login = ({ foto, id, role, username, token, roles }) => ({
  type: types.login,
  payload: {
    foto,
    id,
    role,
    username,
    token,
    roles,
  }
});

export const logout = () => ({
  type: types.logout,
});