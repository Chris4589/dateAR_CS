import React from 'react';

export const DsTable = ({component:Component, token, titles, items, addModal, user_id, fnFresh}) => {

  return (
    <div className="Ds_table">
      <button onClick={addModal}>
        Create
      </button>

      <table>
        <thead>
          <tr>
            {
              titles.map((items) => (
                <th key={items}>{items}</th>
              ))
            }
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <Component servers={items} token={token} user_id={user_id} fnFresh={fnFresh}/>
      </table>

      
    </div>
  )
}