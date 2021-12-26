import React from 'react'
import { useForm } from 'react-hook-form';

export const FormAdmin = ({addModal}) => {

  const { register, reset, handleSubmit, formState:{ errors } } = useForm();

  const AdminValidation = {
    steamid: register('steamid', { required: true, minLength: 6 }),
    name: register('name', { required: true, minLength: 3 }),
    type: register('type', { required: true }),
    password: register('password', { required: true, minLength: 6 }),
    date: register('date', { required: true }),
    server: register('server', { required: true }),
    role: register('role', { required: true }),
  };
  
  const ModalSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className='Modal__form'>
      <form onSubmit={handleSubmit(ModalSubmit)}>
        <h1>Create Admins</h1>

        <div className="Modal__formGroup">
          <label htmlFor="">SteamId/Nick</label>
          <span className='Modal__inputgroup'>
            <i className='fas fa-id-card'></i>
            <input type="text" { ...AdminValidation.steamid } defaultValue='' placeholder='SteamID/Nickname' />
          </span>
          { errors.steamid?.type === 'required' && <span>El campo es requerido</span> }
          { errors.steamid?.type === 'minLength' && <span>Se necesitan 6 caracteres</span> }
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">UserName</label>
          <span className='Modal__inputgroup'>
            <i className='fa fa-id-badge'></i>
            <input type="text" { ...AdminValidation.name } defaultValue='' placeholder='UserName' />
          </span>
          { errors.name?.type === 'required' && <span>El campo es requerido</span> }
          { errors.name?.type === 'minLength' && <span>Se necesitan 3 caracteres</span> }
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Password</label>
          <span className='Modal__inputgroup'>
            <i className='	fas fa-user-secret'></i>
            <input type="text" { ...AdminValidation.password } defaultValue='' placeholder='Password' />
          </span>
          { errors.password?.type === 'required' && <span>El campo es requerido</span> }
          { errors.password?.type === 'minLength' && <span>Se necesitan 6 caracteres</span> }
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Type</label>
          <span className='Modal__inputgroup'>
            <i className='fab fa-typo3'></i>
            <select { ...AdminValidation.type } defaultValue='' >
              <option value="1">STEAM</option>
              <option value="2">STEAM_ID_LAN</option>
            </select>
          </span>
          { errors.type?.type === 'required' && <span>El campo es requerido</span> }
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Server</label>
          <span className='Modal__inputgroup'>
            <i className='fas fa-server'></i>
            <select { ...AdminValidation.server } defaultValue='' >
              <option value="1">ZOMBIE ESCAPE</option>
              <option value="2">CAPTURE THE FLAG</option>
            </select>
          </span>
          { errors.server?.type === 'required' && <span>El campo es requerido</span> }
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Role</label>
          <span className='Modal__inputgroup'>
            <i className='fab fa-critical-role'></i>
            <select { ...AdminValidation.role } defaultValue='' >
              <option value="1">STAFF</option>
              <option value="2">ADMIN</option>
            </select>
          </span>
          { errors.role?.type === 'required' && <span>El campo es requerido</span> }
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Expiration</label>
          <span className='Modal__inputgroup'>
            <i className='fas fa-calendar-check'></i>
            <input type="date" { ...AdminValidation.date } defaultValue='' placeholder='Password' />
          </span>
          { errors.date?.type === 'required' && <span>El campo es requerido</span> }
        </div>

        <div className="Modal_groupBtn">
          <button className='btn btn-cancel' onClick={addModal}>Cancel</button>
          <button className='btn btn-primary'>Add</button>
        </div>

      </form>
    </div>
  )
}
