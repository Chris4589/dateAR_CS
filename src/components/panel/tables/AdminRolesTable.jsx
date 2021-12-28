import React from 'react'

export const AdminRolesTable = ({servers}) => {
  return (
    <tbody>
      {
        servers?.map((admin)=>(
          <tr key={admin.id}>
            <td>{admin.id}</td>
            <td>{admin.name}</td>
            <td>{admin.flags}</td>
            <td><i className="fa fa-edit"></i></td>
            <td><i className="fa fa-remove"></i></td>
          </tr>
        ))
      }
    </tbody>
  )
}
