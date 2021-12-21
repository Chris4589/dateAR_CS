import React from 'react';

export const DsTable = ({component:Component, titles, items, addModal}) => {

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
        <Component servers={items}/>
      </table>

      
    </div>
  )
}