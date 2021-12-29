import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { enviroments } from '../../../enviroments';
import { is_user_steam } from '../../../functions/is_user_steam'

export const AdminTable = ({servers}) => {
  const { id:user_id, token } = useSelector(state => state.auth);

  const deleteThisAdmin = (id) => {
    Swal.fire({
      title: 'Quieres borrar este admin?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Borrar',
      denyButtonText: `No Borrar`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${enviroments.address_host}/api/admins/${id}?user_id=${user_id}`, {
          headers: {
            'x-token': token
          }
        }).then(() => {Swal.fire('Borrado!', '', 'success');})
          .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: error.response.data.msg,
          })
        });
      } else if (result.isDenied) {
        Swal.fire('Se ha cancelado!', '', 'info');
      }
    });
  }

  return (
    <tbody>
      {
        servers?.map((admin)=>(
          <tr key={admin.id}>
            <td>{admin.id}</td>
            <td>{admin.name}</td>
            <td>{is_user_steam(admin.type)}</td>
            <td>{admin.date}</td>
            <td><i className="fa fa-edit"></i></td>
            <td><i onClick={() => deleteThisAdmin(admin.id)} className="fa fa-remove"></i></td>
          </tr>
        ))
      }
    </tbody>
  )
}
