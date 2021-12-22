import React from 'react'

export const FormAdminRoles = ({addModal}) => {
  const ModalSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='Modal__form'>
      <form onSubmit={ModalSubmit}>
        <h1>Create Admins</h1>

        <div className="Modal__formGroup">
          <label htmlFor="">Role Name</label>
          <span className='Modal__inputgroup'>
            <i className='fab fa-critical-role'></i>
            <input type="text" placeholder='[ STAFF ]... example' />
          </span>
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Flags</label>
          <span className='Modal__inputgroup'>
            <i className='fas fa-flag'></i>
            <input type="text" placeholder='abcdefg' />
          </span>
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Description Role</label>
          <span className='Modal__inputgroup-area'>
            <i className='fas fa-comment'></i>
            <textarea name="" id="" cols="30" rows="10" placeholder={"Short description of the roles"}></textarea>
          </span>
        </div>

        <div className="Modal_groupBtn">
          <button className='btn btn-cancel' onClick={addModal}>Cancel</button>
          <button className='btn btn-primary'>Add</button>
        </div>

      </form>
    </div>
  )
}
