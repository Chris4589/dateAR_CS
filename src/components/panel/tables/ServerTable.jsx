import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import { enviroments } from '../../../enviroments';

export const ServerTable = ({servers, user_id, fnFresh, token}) => {
  //solo este se crea

  const deleteThisServer = (id) => {
    Swal.fire({
      title: 'Quieres borrar este servidor?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Borrar',
      denyButtonText: `No Borrar`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${enviroments.address_host}/api/server/${id}?user_id=${user_id}`, {
          headers: {
            'x-token': token
          }
        }).then(() => {Swal.fire('Borrado!', '', 'success'); fnFresh();})
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
        servers?.map((server)=>(
          <tr key={server.id}>
            <td>{server.id}</td>
            <td>
              <img className="DS__item_img" alt="IMG" srcSet={server.foto} />
            </td>
            <td>{server.name}</td>
            <td>{server.ip}</td>
            <td><i className="fa fa-edit"></i></td>
            <td><i onClick={() => deleteThisServer(server.id)} className="fa fa-remove"></i></td>
          </tr>
        ))
      }
    </tbody>
  )
}
