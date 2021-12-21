import React from 'react'

export const FormAdmin = ({addModal}) => {
  const ModalSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='Modal__form'>
      <form onSubmit={ModalSubmit}>
        <h1>Create Admins</h1>

        <div className="Modal__formGroup">
          <label htmlFor="">SteamId/Nick</label>
          <span className='Modal__inputgroup'>
            <i className='fas fa-id-card'></i>
            <input type="text" placeholder='SteamID/Nickname' />
          </span>
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">UserName</label>
          <span className='Modal__inputgroup'>
            <i className='fa fa-id-badge'></i>
            <input type="text" placeholder='UserName' />
          </span>
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Type</label>
          <span className='Modal__inputgroup'>
            <i className='fab fa-typo3'></i>
            <select name="" id="">
              <option value="1">STEAM</option>
              <option value="2">STEAM_ID_LAN</option>
            </select>
          </span>
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Password</label>
          <span className='Modal__inputgroup'>
            <i className='	fas fa-user-secret'></i>
            <input type="text" placeholder='Password' />
          </span>
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Expiration</label>
          <span className='Modal__inputgroup'>
            <i className='fas fa-calendar-check'></i>
            <input type="date" placeholder='Password' />
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
