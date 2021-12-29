import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { enviroments } from '../../enviroments';
import { useModal } from '../../Hooks/useModal';
import { AdminTable } from './tables/AdminTable';
import { DsTable } from './Utils/DsTable';
import { FormAdmin } from './Utils/FormAdmin';
import { Modal } from './Utils/Modal';

export const Admins = () => {
  const [ addModal, modalClass ] = useModal();
  const { id, token } = useSelector(state => state.auth);
  const [admins, setAdmins] = useState([]);
  const [servers, setServers] = useState([]);
  const [currenServer, setCurrenServer] = useState();
  const mountedRef = useRef(true);
  
  const adms = useCallback(
    async () => {
      try {
        if (currenServer === undefined) {
          return setAdmins([]);
        }
        const data = await axios.get(`${enviroments.address_host}/api/user/${id}/server/${currenServer}/admin?user_id=${id}`, {
          headers: {
            'x-token': token
          }
        });
        return data.data;
      } catch (error) {
        return 'error al cargar admins';
      }
    },
    [id, token, currenServer],
  );

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
  
  useEffect(() => {
    async function info() {

      const sv = await svs();
      setServers(sv?.msg);

      if (sv?.msg.length !== 0) {
        setCurrenServer(sv?.msg[0].id);
      }
    };

    info();
    return () => {
      mountedRef.current = false;
    }
  }, [svs]);

  useEffect(() => {
    async function info() {

      const adm = await adms();
      setAdmins(adm?.msg);
    };

    info();
    return () => {
      mountedRef.current = false;
    }
  }, [adms, currenServer]);

  const titles = [
    'ID',
    'Name',
    'TYPE',
    'EXPIRATION',
  ];

  const onChange = (e) => {
    if (!e.target.value) {
      return;
    }
    setCurrenServer(e.target.value);
  }

  return (
    <div>
      <div className="Ds__container">
      <select onChange={onChange}>
        {
          !!servers && servers.map((sv) => (<option key={sv.id} value={sv.id}>{sv.name}</option>))
        }
        
      </select>
      <DsTable component={AdminTable} titles={titles} items={admins} addModal={addModal}/>

      <Modal component={FormAdmin} addModal={addModal} modalClass={modalClass} />
    </div>
    </div>
  )
}
