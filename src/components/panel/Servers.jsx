import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useModal } from '../../Hooks/useModal';
import { ServerTable } from './tables/ServerTable';
import { DsTable } from './Utils/DsTable';
import { Modal } from './Utils/Modal';
import { FormServer } from './Utils/FormServer';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { enviroments } from '../../enviroments';

export const Servers = () => {

  const [ addModal, modalClass ] = useModal();
  const { id, token } = useSelector(state => state.auth);

  const [servers, setServers] = useState([]);
  const mountedRef = useRef(true);

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

  const titles = [
    'ID',
    'Foto',
    'Server',
    'IP',
  ];

  useEffect(() => {
    svs().then((data) => setServers(data.msg))
      .catch((err) => console.log(err));
    return () => {
      mountedRef.current = false;
    }
  }, [svs]);

  return (
    <div className="Ds__container">
      <DsTable component={ServerTable} token={token} titles={titles} items={servers} addModal={addModal} user_id={id} fnFresh={svs}/>

      <Modal component={FormServer} addModal={addModal} modalClass={modalClass} />
    </div>
  )
}
