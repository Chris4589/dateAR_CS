import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { enviroments } from '../../../enviroments';

export const FormAdmin = ({addModal}) => {

  const { register, reset, handleSubmit, formState:{ errors } } = useForm();
  const [admins, setSdmins] = useState([]);
  const { id, token } = useSelector(state => state.auth);
  const mountedRef = useRef(true);

  const AdminValidation = {
    steamid: register('steamid', { required: true, minLength: 2 }),
    name: register('name', { required: true, minLength: 3 }),
    type: register('type', { required: true }),
    password: register('password', { required: true, minLength: 4 }),
    date: register('date', { required: true }),
    server: register('server', { required: true }),
    role: register('role', { required: true }),
  };

  const [servers, setServers] = useState([]);
  const svs = useCallback(
    () => {
      return new Promise((resolve, reject) => {
        axios.get(`${enviroments.address_host}/api/user/${id}/server?user_id=${id}`, {
          headers: {
            'x-token': token
          } 
        }).then(({data}) => !mountedRef.current ? null : resolve(data))
          .catch(() => reject('error cargar svs'));
      });
    },
    [id, token],
  );

  const rangos = useCallback(
    () => {
      return new Promise((resolve, reject) => {
        axios.get(`${enviroments.address_host}/api/users/${id}/rangos?user_id=${id}`, {
          headers: {
            'x-token': token
          }
        }).then(({data}) => !mountedRef.current ? null : resolve(data))
          .catch(() => reject(`Error al cargar los rangos`));
      });
    },
    [id, token],
  );

  useEffect(() => {
    svs().then((data) => setServers(data.msg))
      .catch((err) => console.log(err));
    return () => {
      mountedRef.current = false;
    }
  }, [svs]);

  useEffect(() => {
    rangos().then((data) => setSdmins(data.msg))
      .catch((err) => console.log(err));

    return () => {
      mountedRef.current = false
    }
  }, [rangos]);
  
  const ModalSubmit = ({ server, role, ...newAdmin }) => {
    axios.post(`${enviroments.address_host}/api/server/${server}/rango/${role}/admin?user_id=${id}`, newAdmin, {
      headers: {
        'x-token': token
      }
    }).then( ()=> {Swal.fire('Se creo correctamente'); cancel();})
      .catch((res) => Swal.fire({
        icon: 'error',
        title: 'Error',
        text: JSON.stringify(res.response.data.msg,)
      }));
  }

  const cancel = () => {
    reset({
      steamid: '',
      name: '',
      type: '1',
      password: '',
      date: '',
      server: servers.length !== 0 ? servers[0].id : '',
      role: admins.length !== 0 ? admins[0].id : '',
    });
    addModal();
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
          { errors.steamid?.type === 'minLength' && <span>Se necesitan 2 caracteres</span> }
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
          { errors.password?.type === 'minLength' && <span>Se necesitan 4 caracteres</span> }
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Type</label>
          <span className='Modal__inputgroup'>
            <i className='fab fa-typo3'></i>
            <select { ...AdminValidation.type } defaultValue='' >
              <option value="1">STEAM</option>
              <option value="0">STEAM_ID_LAN</option>
            </select>
          </span>
          { errors.type?.type === 'required' && <span>El campo es requerido</span> }
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Server</label>
          <span className='Modal__inputgroup'>
            <i className='fas fa-server'></i>
            <select { ...AdminValidation.server } defaultValue='' >
            { servers && servers.map((sv) =>(<option key={sv.id} value={sv.id}>{sv.name}</option>))}
            </select>
          </span>
          { errors.server?.type === 'required' && <span>El campo es requerido</span> }
        </div>

        <div className="Modal__formGroup">
          <label htmlFor="">Role</label>
          <span className='Modal__inputgroup'>
            <i className='fab fa-critical-role'></i>
            <select { ...AdminValidation.role } defaultValue='' >
              { admins && admins.map((adm) =>(<option key={adm.id} value={adm.id}>{adm.name}</option>))}
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
          <button className='btn btn-cancel' onClick={cancel}>Cancel</button>
          <button className='btn btn-primary'>Add</button>
        </div>

      </form>
    </div>
  )
}
