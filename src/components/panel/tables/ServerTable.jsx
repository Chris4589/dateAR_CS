import React from 'react';

export const ServerTable = ({servers}) => {
  //solo este se crea
  return (
    <tbody>
      {
        servers.map((server)=>(
          <tr key={server.id}>
            <td>{server.id}</td>
            <td>
              <img className="DS__item_img" alt="IMG" srcSet={server.foto} />
            </td>
            <td>{server.name}</td>
            <td>{server.ip}</td>
            <td><i className="fa fa-edit"></i></td>
            <td><i className="fa fa-remove"></i></td>
          </tr>
        ))
      }
    </tbody>
  )
}
