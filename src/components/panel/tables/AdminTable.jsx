import React from 'react'
import { is_user_steam } from '../../../functions/is_user_steam'

export const AdminTable = ({servers}) => {

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
            <td><i className="fa fa-remove"></i></td>
          </tr>
        ))
      }
    </tbody>
  )
}
