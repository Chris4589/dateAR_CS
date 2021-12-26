import React from 'react';
import { useForm } from 'react-hook-form';

export const FormAdminRoles = ({addModal}) => {
  
  const { register, reset, handleSubmit, formState:{ errors } } = useForm();

  const adminRoleValidation = {
    name: register('name', { required: true, minLength: 3 }),
    flags: register('flags', { required: true, minLength: 5 }),
    description: register('description', { required:true, minLength: 5 }),
  };

  const ModalSubmit = (data) => {
    console.log(data);
  }
  
  return (
    <div className='Modal__form'>
      <form onSubmit={handleSubmit(ModalSubmit)}>
        <h1>Create Admins</h1>

        <div className="Modal__formGroup">
          <label htmlFor="">Role Name</label>
          <span className='Modal__inputgroup'>
            <i className='fab fa-critical-role'></i>
            <input type="text" { ...adminRoleValidation.name } defaultValue='' placeholder='[ STAFF ]... example' />
          </span>
          { errors.name?.type === 'required' && <span>Este campo es necesario.</span> }
          { errors.name?.type === 'minLength' && <span>Se necesitan 3 caracteres.</span> }
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Flags</label>
          <span className='Modal__inputgroup'>
            <i className='fas fa-flag'></i>
            <input type="text" { ...adminRoleValidation.flags } defaultValue='' placeholder='abcdefg' />
          </span>
          { errors.flags?.type === 'required' && <span>Este campo es necesario.</span> }
          { errors.flags?.type === 'minLength' && <span>Se necesitan 5 caracteres.</span> }
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Description Role</label>
          <span className='Modal__inputgroup-area'>
            <i className='fas fa-comment'></i>
            <textarea { ...adminRoleValidation.description } defaultValue='' cols="30" rows="10" placeholder={"Short description of the roles"}></textarea>
          </span>
          { errors.description?.type === 'required' && <span>Este campo es necesario.</span> }
          { errors.description?.type === 'minLength' && <span>Se necesitan 5 caracteres.</span> }
        </div>

        <div className="Modal_groupBtn">
          <button className='btn btn-cancel' onClick={addModal}>Cancel</button>
          <button className='btn btn-primary'>Add</button>
        </div>

      </form>
    </div>
  )
}
