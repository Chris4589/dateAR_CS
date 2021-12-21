import React from 'react'

export const FormServer = ({addModal}) => {
  const ModalSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='Modal__form'>
      <form onSubmit={ModalSubmit}>
        <h1>Create Server</h1>

        <div className="Modal__formGroup">
          <label htmlFor="">Name Server</label>
          <span className='Modal__inputgroup'>
            <i className='fas fa-mouse-pointer'></i>
            <input type="text" placeholder='SVL | Zombie Escape' />
          </span>
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Photo Server</label>
          <span className='Modal__inputgroup'>
            <i className='fas fa-file'></i>
            <input type="file" className='file' placeholder='a' />
          </span>
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Description Server</label>
          <span className='Modal__inputgroup-area'>
            <i className='fas fa-comment'></i>
            <textarea name="" id="" cols="30" rows="10" placeholder={"Short description of the server"}></textarea>
          </span>
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">IP Server</label>
          <span className='Modal__inputgroup'>
            <i className='fas fa-server'></i>
            <input type="text" placeholder='104.128.235.33:27020' />
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
