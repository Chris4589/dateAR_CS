import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { enviroments } from '../../../enviroments';

export const FormServer = ({addModal}) => {

  const { register, reset, handleSubmit, formState:{ errors } } = useForm();
  const { id, token } = useSelector(state => state.auth);

  const formValidation = {
    name: register('name', { required: true, minLength: 8 }),
    foto: register('foto', { required:true }),
    description: register('description', { required: true, minLength: 12 }),
    ip: register('ip', { required: true, minLength: 8 }),
  };

  const ModalSubmit = (data) => {
    axios.post(`${enviroments.address_host}/api/server?user_id=${id}`, data, {
      headers: {
        'x-token': token
      }
    }).then( ()=> Swal.fire('Se creo correctamente'))
      .catch((res) => Swal.fire({
        icon: 'error',
        title: 'Error',
        text: res.response.data.msg,
      }));
  };

  const cancel = () => {
    reset({
      name: '',
      description: '',
      ip: '',
      foto: null
    });
    addModal();
  }
  
  return (
    <div className='Modal__form'>
      <form onSubmit={handleSubmit(ModalSubmit)}>
        <h1>Create Server</h1>

        <div className="Modal__formGroup">
          <label htmlFor="">Name Server</label>
          <span className='Modal__inputgroup'>
            <i className='fas fa-mouse-pointer'></i>
            <input type="text" { ...formValidation.name } defaultValue='' placeholder='SVL | Zombie Escape' />
          </span>
          { errors.name?.type === 'required' && <span>Este campo es necesario.</span> }
          { errors.name?.type === 'minLength' && <span>Se requieren 8 caracteres</span> }
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Photo Server</label>
          <span className='Modal__inputgroup'>
            <i className='fas fa-file'></i>
            <input type="file" { ...formValidation.foto } defaultValue='' className='file' placeholder='a' />
          </span>
          { errors.foto?.type === 'required' && <span>Este campo es necesario.</span> }
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Description Server</label>
          <span className='Modal__inputgroup-area'>
            <i className='fas fa-comment'></i>
            <textarea cols="30" rows="10" { ...formValidation.description } defaultValue='' placeholder={"Short description of the server"}></textarea>
          </span>
          { errors.description?.type === 'required' && <span>Este campo es necesario.</span> }
          { errors.description?.type === 'minLength' && <span>Se requieren 12 caracteres</span> }
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">IP Server</label>
          <span className='Modal__inputgroup'>
            <i className='fas fa-server'></i>
            <input type="text" { ...formValidation.ip } defaultValue='' placeholder='104.128.235.33:27020' />
          </span>
          { errors.ip?.type === 'required' && <span>Este campo es necesario.</span> }
          { errors.ip?.type === 'minLength' && <span>Se requieren 8 caracteres</span> }
        </div>

        <div className="Modal_groupBtn">
          <button className='btn btn-cancel' onClick={cancel}>Cancel</button>
          <button className='btn btn-primary'>Add</button>
        </div>

      </form>
    </div>
  )
}
