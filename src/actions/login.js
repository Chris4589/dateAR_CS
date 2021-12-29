import axios from "axios";
import Swal from "sweetalert2";
import { enviroments } from "../enviroments";
import { types } from "../types/types";

export const startLogin = (data) => {
  return (dispatch) => {
    axios.post(`${enviroments.address_host}/api/users/auth`, data)
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
      })
      .catch((e) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: e.response.data.msg,
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